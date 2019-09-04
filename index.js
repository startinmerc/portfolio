// =========================HERO TITLE ANIMATION=========================

const letters = Array.from(document.querySelectorAll(".letter"));

for(let i = 0; i<letters.length; i++){
	letterRandomize(i);
}

function letterRandomize(i) {
	let num = Math.floor(Math.random()*2000);
	letters[i].style.animationDelay = num + 'ms';
}

// ==============Intersection Observer to pause animation==============

let options = {threshold: 0.3},
		ellipses = document.querySelectorAll("#hero ellipse"),
		observer = createObserver(options);

observer.observe(document.querySelector(".container"));

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

btns.forEach((btn,ind)=> {
	btn.addEventListener("click", portClick, false);
	btn.param = ind;
});

btns[0].click();

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