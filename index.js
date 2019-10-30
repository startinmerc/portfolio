window.onload = function(){
	addLetterDelays();
	checkAndAddObserver();
	addButtonListeners();
	addLinkHovers();
	btns[0].click();
}


// =========================HERO TITLE ANIMATION=========================

const letters = Array.from(document.querySelectorAll(".letter"));

function addLetterDelays(){
	for(let i = 0; i<letters.length; i++){
		letterRandomize(i);
	}
}

function letterRandomize(i) {
	let num = Math.floor(Math.random()*2000);
	letters[i].style.animationDelay = num + 'ms';
}

// ==============Intersection Observer to pause animation==============

function checkAndAddObserver(){
	if (
	"IntersectionObserver" in window &&
	"IntersectionObserverEntry" in window &&
	"intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
		let options = {threshold: 0.3},
		ellipses = document.querySelectorAll("#hero ellipse"),
		observer = createObserver(options);

		observer.observe(document.querySelector(".container"));
	};
}

function createObserver(options) {
	return new IntersectionObserver((entries, observer)=>{
		entries.forEach((entry)=>{
			if (entry.isIntersecting) {
				ellipses.forEach((v)=>{v.classList.add("paused")});
			} else {
				ellipses.forEach((v)=>{v.classList.remove("paused")});
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