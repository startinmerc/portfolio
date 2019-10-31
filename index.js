window.onload = function(){
	replaceLetters();
	checkAndAddObserver();
	addButtonListeners();
	addLinkHovers();
	btns[0].click();
}


// =========================HERO TITLE ANIMATION=========================

const arr = document.querySelector('#hero-title').innerText.split('')
var lettersTimeline = new TimelineLite();

function replaceLetters(){
	document.querySelector('#hero-title').innerHTML = '';
	arr.forEach((letter)=>{
		if(!letter.match(/[a-z]/i)){
			document.querySelector('#hero-title').innerHTML += ('<hr>')
		} else {
			document.querySelector('#hero-title').innerHTML += (generateLetter(letter))}
		}
	);
	tweenLetters();
}

function tweenLetters(){
	document.querySelectorAll(".letter").forEach((letter)=>{
		lettersTimeline.to(letter,(Math.random()*3)+0.5,
			{
				opacity: 1,
				textShadow: '0px 0px 0px var(--black)',
				delay: Math.random()*2,
				ease: Power4.easeOut
			}, 0
		);
	});
}

function generateLetter(char){
	return (
		'<span class="letter">'+char+' </span>'
	)
}

TweenMax.to('.svg-left circle',2,{
	strokeDashoffset: '942px'
})

TweenMax.to('.svg-right circle',2,{
	strokeDashoffset: '314px'
})

var horizontals = new TimelineLite();

horizontals.fromTo('.h-1',0.1,{scaleX: 0,transformOrigin: 'center center'},{scaleX: 1,delay: 0.3});
horizontals.fromTo('.h-2',0.1,{scaleX: 0,transformOrigin: 'center center'},{scaleX: 1,delay: 0.2});
horizontals.fromTo('.h-3',0.1,{scaleX: 0,transformOrigin: 'center center'},{scaleX: 1,delay: 0.2});
horizontals.fromTo('.h-4',0.1,{scaleX: 0,transformOrigin: 'center center'},{scaleX: 1,delay: 0.2});
horizontals.fromTo('.h-5',0.1,{scaleX: 0,transformOrigin: 'center center'},{scaleX: 1,delay: 0.2});

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
				ellipses.forEach((v)=>{lettersTimeline.pause()});
			} else {
				ellipses.forEach((v)=>{lettersTimeline.play()});
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