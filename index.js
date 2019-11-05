window.onload = function(){
	replaceLetters();
	checkAndAddObserver();
	addButtonListeners();
	addLinkHovers();
	btns[0].click();
	buildHeroTimeline();
	buildGhostTimeline();
}


// =========================HERO TITLE ANIMATION=========================

const heroTimeline = new TimelineLite();

function buildHeroTimeline(){
	heroTimeline.add(drawCircle(),0);
	heroTimeline.add(drawLines(),0);
	heroTimeline.add(tweenLetters(),0);
	heroTimeline.add(getEllipseTimeline(),0);
	heroTimeline.to(".ellipse-group",1,{opacity: 1},2);
	heroTimeline.add(fadeIn('.hero-sub'));
	heroTimeline.add(fadeIn('#prompt'));
}

// ============================LETTER TWEENS============================

const arr = document.querySelector('#hero-title').innerText.split('');

function replaceLetters(){
	document.querySelector('#hero-title').innerHTML = '';
	arr.forEach((letter)=>{
		if(!letter.match(/[a-z]/i)){
			document.querySelector('#hero-title').innerHTML += ('<hr>');
		} else {
			document.querySelector('#hero-title').innerHTML += ('<span class="letter">'+letter+' </span>');
		}
	});
	tweenLetters();
}

function tweenLetters(){
	const lettersTimeline = new TimelineLite();
	document.querySelectorAll(".letter").forEach((letter)=>{
		lettersTimeline.fromTo(letter,(Math.random()*3)+0.5,
			{
				opacity: 0
			},
			{
				opacity: 1,
				textShadow: '0px 0px 0px var(--black)',
				delay: Math.random()*2,
				ease: Power4.easeOut,
				// ...getRepeat()
			}, 0
		);
	});
	return lettersTimeline;
}

function getRepeat(){
	if(Math.random()<0.5){
		return {repeat: -1, yoyo: true}
	} else {
		return {repeat: 0}
	};
}

// =========================HERO SVG TWEENS=============================

function getEllipseTimeline(){
	const ellipseTimeline = new TimelineLite();
	document.querySelectorAll('.hero-ellipse').forEach((v,i)=>{
		if(i<3){
			ellipseTimeline.fromTo(v,3,{attr:{rx: '200px'}},{attr:{rx: '0px'},repeat: -1,delay: i,ease:Linear.easeNone},0);
		} else {
			ellipseTimeline.fromTo(v,3,{attr:{rx: '0px'}},{attr:{rx: '200px'},repeat: -1,delay: i-3,ease:Linear.easeNone},0);
		}
	});
	return ellipseTimeline;
}

function drawCircle(){
	const circleTimeline = new TimelineLite();
	circleTimeline.to('.svg-left circle',2,{strokeDashoffset: '942px'},0);
	circleTimeline.to('.svg-right circle',2,{strokeDashoffset: '314px'},0);
	return drawLines;
}

function drawLines(){
	const lineTimeline = new TimelineLite();
	lineTimeline.fromTo('.h-1',0.1,{scaleX: 0,transformOrigin: 'center center'},{scaleX: 1,delay: 0.3});
	lineTimeline.fromTo('.h-2',0.1,{scaleX: 0,transformOrigin: 'center center'},{scaleX: 1,delay: 0.2});
	lineTimeline.fromTo('.h-3',0.1,{scaleX: 0,transformOrigin: 'center center'},{scaleX: 1,delay: 0.2});
	lineTimeline.fromTo('.h-4',0.1,{scaleX: 0,transformOrigin: 'center center'},{scaleX: 1,delay: 0.2});
	lineTimeline.fromTo('.h-5',0.1,{scaleX: 0,transformOrigin: 'center center'},{scaleX: 1,delay: 0.2});
	return lineTimeline;
}

function fadeIn(element){
	const fadeInSub = new TimelineLite();
	fadeInSub.to(element,0.4,{opacity: 1},0);
	fadeInSub.to(element,0.3,{textShadow: "none"},0);
	return fadeInSub;
}

// GHOST

const ghostTimeline = new TimelineLite();

function buildGhostTimeline(){
	ghostTimeline.add(getShadowTimeline(),0);
	ghostTimeline.add(getBlinkTimeline(),0);
	ghostTimeline.add(getFloatTimeline(),0);
}

function getShadowTimeline(){
	let shadowTimeline = new TimelineLite();
	shadowTimeline.to('.shadow',1,{attr: {rx: '30px', ry: '5px'}, repeat: -1, yoyo: true,ease: Power1.easeInOut})
	return shadowTimeline;
}

function getBlinkTimeline(){
	let tl = new TimelineMax({repeat: -1, repeatDelay: 2});
	tl.to('.eye',0.18,{attr: {ry: '0px'}});
	tl.to('.eye',0.18,{attr: {ry: '12.5px'}});
	tl.to('.eye',0.18,{attr: {ry: '0px'}});
	tl.to('.eye',0.18,{attr: {ry: '12.5px'}});
	return tl;
}

function getFloatTimeline(timeline){
	let tl = new TimelineLite();
	tl.fromTo('#ghost',1,{y:'-10px'},{y:'10px',yoyo: true, repeat: -1,ease: Power1.easeInOut});
	return tl;
}

// ==============Intersection Observer to pause animation==============

const ellipses = document.querySelectorAll("#hero ellipse");

function checkAndAddObserver(){
	if (
	"IntersectionObserver" in window &&
	"IntersectionObserverEntry" in window &&
	"intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
		let options = {threshold: 0.3},
		observer = createObserver(options);

		observer.observe(document.querySelector(".container"));
	};
}

function createObserver(options) {
	return new IntersectionObserver((entries, observer)=>{
		entries.forEach((entry)=>{
			if (entry.isIntersecting) {
				heroTimeline.pause();
			} else {
				heroTimeline.play();
			}
		});
	}, options);
}

// ========================PORTFOLIO NAVIGATION========================

const btns = document.querySelectorAll("#portfolio .section-text button");
const pjts = document.querySelectorAll(".portfolio-entry");

function addButtonListeners(){
	btns.forEach((btn,ind)=> {
		btn.addEventListener("click", portClick, false);
		btn.param = ind;
	});
}

function portClick(evt) {
	clearAll();
	btns[evt.target.param].classList.add("button-active");
	toMax(pjts[evt.target.param]);
}

function clearAll() {
	btns.forEach((v,i)=>{
		v.classList.remove("button-active");
	});
	pjts.forEach((v,i)=>{
		toMin(v);
	});
}

function toMin(project) {
	project.classList.remove("max");
	project.classList.add("min");
	project.style.display = "none";
}

function toMax(project) {
	project.style.display = "initial";
	project.classList.remove("min");
	project.classList.add("max")
}

// ============================LINK STYLING============================

function addLinkHovers(){
	document.querySelectorAll('.link-light, .link-dark').forEach((a)=>{
		a.onmouseenter = function() {
			this.style.boxShadow = `${this.offsetWidth}px 0 inset #EDEBE9`;
			this.style.webkitBoxShadow = `${this.offsetWidth}px 0 #EDEBE9 inset`;
			this.style.mozBoxShadow = `${this.offsetWidth}px 0 inset #EDEBE9`;
		}
		a.onmouseleave = function() {
			this.style.boxShadow = `0px 0 inset #EDEBE9`;
			this.style.webkitBoxShadow = `0px 0 #EDEBE9 inset`;
			this.style.mozBoxShadow = `0px 0 inset #EDEBE9`;
		}
	});
}