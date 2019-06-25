const dev = false;

// =========================HERO TITLE ANIMATION=========================

if (dev) {
	document.querySelector("#hero").innerHTML = "";
} else {
	const letters = "StrangeIndustries",
	els = Array.from(document.querySelectorAll(".letter"));

	for(let i = 0; i<letters.length; i++){
		letterRandomize(i);
	}

	function letterRandomize(i) {
		let num = Math.floor(Math.random()*2000);
		els[i].style.animationDelay = num + 'ms';
		els[i].append(letters[i]);
	}
}

// ========================PORTFOLIO NAVIGATION========================

const btns = document.querySelectorAll(".section-text button");
const pjts = document.querySelectorAll(".portfolio-entry");

btns.forEach((btn,ind)=> {
	btn.addEventListener("click", portClick, false);
	btn.param = ind;
});

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