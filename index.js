// ==============================ON LOAD===============================

window.onload = function(){
	replaceLetters();
	checkAndAddObserver();
	addButtonListeners();
	addLinkHovers();
	buildHeroTimeline();
	buildGhostTimeline();
}

// ========================HERO TITLE ANIMATION========================

const heroTimeline = new TimelineLite();

function buildHeroTimeline(){
	heroTimeline.add(tweenLetters(),0);
	heroTimeline.add(rotateVert(),2);
	heroTimeline.add(drawCircle(),0);
	heroTimeline.add(drawHorz(),1);
	heroTimeline.add(fadeIn('#hero-sub'));
	heroTimeline.add(fadeIn('#prompt'));
	heroTimeline.add(showVert(),2);
}

// ============================LETTER TWEENS===========================

const letters = document.querySelector('#hero-title').innerText.split('');

function replaceLetters(){
	document.querySelector('#hero-title').innerHTML = '';
	letters.forEach((letter)=>{
		if(!letter.match(/[a-z]/i)){
			document.querySelector('#hero-title').innerHTML += ('<hr>');
		} else {
			document.querySelector('#hero-title').innerHTML += ('<span class="letter">'+letter+' </span>');
		}
	});
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
				...getRepeat()
			}, 0
		);
	});
	lettersTimeline.fromTo('#hero-title hr',1.8,{scaleX: 0},{scaleX: 1, ease: Back.easeOut.config(1.4)},1.5)
	return lettersTimeline;
}

function getRepeat(){
	if(Math.random()<0.3){
		return {repeat: -1, yoyo: true}
	} else {
		return {repeat: 0}
	};
}

function fadeIn(element){
	const fadeInSub = new TimelineLite();
	fadeInSub.fromTo(element,0.4,{opacity: 0},{opacity: 1},0);
	fadeInSub.fromTo(element,0.3,{textShadow: "0 0 5px var(--black)"},{textShadow: "none"},0);
	return fadeInSub;
}

// =======================HERO SVG TIMELINES===========================

function drawCircle(){
	let tl = new TimelineLite();
	tl.fromTo('.hero-globe circle',2,{strokeDashoffset: '1884px'},{strokeDashoffset: '0px'});
	return tl;
}

function drawHorz(){
	let tl = new TimelineLite();
	tl.staggerFromTo('.hero-globe-horz',0.2,{scaleX: 0,transformOrigin: 'center center'},{scaleX: 1},0.2);
	return tl;
}

function showVert(){
	let tl = new TimelineLite();
	tl.fromTo('.hero-globe-vert-group',0.5,{opacity: 0},{opacity: 1});
	return tl;
}

function rotateVert(){
	let tl = new TimelineLite();
	tl.staggerFromTo('.hero-globe-vert',6,{
		attr: {d: "M300,5 C-95,35 -95,575 300,605"}
	},{
		attr: {d: "M300,5 C705,25 705,585 300,605"},
		repeat: -1,
		ease: SlowMo.ease.config(0.1, 0.2,  false)
	}
	,1);
	return tl;
}

// ==========================GHOST TIMELINES===========================

const ghostTimeline = new TimelineLite();

function buildGhostTimeline(){
	ghostTimeline.add(getShadowTimeline(),0);
	ghostTimeline.add(getBlinkTimeline(),0);
	ghostTimeline.add(getFloatTimeline(),0);
}

function getShadowTimeline(){
	let tl = new TimelineLite();
	tl.to('.shadow',1,{attr: {rx: '30px', ry: '5px'}, repeat: -1, yoyo: true,ease: Power1.easeInOut})
	return tl;
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

function checkAndAddObserver(){
	if (
	"IntersectionObserver" in window &&
	"IntersectionObserverEntry" in window &&
	"intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
		let options = {threshold: 0.3},
		heroObserver = createObserver(options);
		heroObserver.observe(document.querySelector(".container"));
		let sObserver = sectionObserver(options);
		document.querySelectorAll(".section-content").forEach((section)=>{
			section.classList.add("split");
			sObserver.observe(section);
		});
	} else {
		document.querySelectorAll(".section-content").forEach((section)=>{
			section.classList.remove('split');
		})
	}
}

function createObserver(options) {
	return new IntersectionObserver((entries, observer)=>{
		entries.forEach((entry)=>{
			if (entry.intersectionRatio > 0.3) {
				heroTimeline.pause();
			} else {
				heroTimeline.play();
			}
		});
	}, options);
}

function sectionObserver(options) {
	return new IntersectionObserver((entries, observer)=>{
		entries.forEach((entry)=>{
			if (entry.intersectionRatio > 0.3) {
				entry.target.classList.remove("split");
				observer.unobserve(entry.target);
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
	pjts[evt.target.param].scrollIntoView();
	document.querySelector("#portfolio").scrollIntoView({block:"center"});
}

function clearAll() {
	btns.forEach((btn)=>{
		btn.classList.remove("button-active");
	});
}

// ============================LINK STYLING============================

function addLinkHovers(){
	document.querySelectorAll('.link-light, .link-dark').forEach((a)=>{
		a.onmouseenter = function() {
			this.style.boxShadow = `${this.offsetWidth}px 0 #EDEBE9 inset`;
			this.style.webkitBoxShadow = `${this.offsetWidth}px 0 #EDEBE9 inset`;
			this.style.mozBoxShadow = `${this.offsetWidth}px 0 #EDEBE9 inset`;
		}
		a.onmouseleave = function() {
			this.style.boxShadow = `0px 0 #EDEBE9 `;
			this.style.boxShadow = `0px 0 #EDEBE9 inset`;
			this.style.webkitBoxShadow = `0px 0 #EDEBE9 inset`;
			this.style.mozBoxShadow = `0px 0 #EDEBE9 inset`;
		}
	});
}