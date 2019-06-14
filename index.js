const dev = true;

// =========================HERO TITLE ANIMATION=========================

if (dev) {
	document.querySelector("#hero").innerHTML = "";
} else {
	const letters = "StrangeIndustries",
	els = Array.from(document.querySelectorAll(".letter"));

	for(let i = 0; i<letters.length; i++){
		letterRandomize(i);
	}
}

function letterRandomize(i) {
	let num = Math.floor(Math.random()*2000);
	els[i].style.animationDelay = num + 'ms';
	els[i].append(letters[i]);
}

// ========================PORTFOLIO NAVIGATION========================

const btns = document.querySelectorAll(".section-text button");
const pjts = document.querySelectorAll(".portfolio-entry");

btns[0].addEventListener("click", showFirst);

function showFirst() {
	toMax(pjts[0]);
	btns[0].classList.add("button-active");
	btns[1].classList.remove("button-active");
	btns[2].classList.remove("button-active");
	toMin(pjts[1]);
	toMin(pjts[2]);
}

btns[1].addEventListener("click", showSecond);

function showSecond() {
	toMax(pjts[1]);
	btns[1].classList.add("button-active");
	btns[0].classList.remove("button-active");
	btns[2].classList.remove("button-active");
	toMin(pjts[0]);
	toMin(pjts[2]);
};

btns[2].addEventListener("click", showThird);

function showThird() {
	toMax(pjts[2]);
	btns[2].classList.add("button-active");
	btns[0].classList.remove("button-active");
	btns[1].classList.remove("button-active");
	toMin(pjts[0]);
	toMin(pjts[1]);
};

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