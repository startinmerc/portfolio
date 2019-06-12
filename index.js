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

btns[0].addEventListener("click", showAll);

function showAll() {
	pjts.forEach((project)=>{
		project.classList.remove("max");
		project.classList.add("min");
		project.style.display = "initial";
		project.querySelector(".min-max-toggle button").innerText = "Show Details";
	});
	btns[0].classList.add("button-active");
	btns[1].classList.remove("button-active");
	btns[2].classList.remove("button-active");
	btns[3].classList.remove("button-active");
}

btns[1].addEventListener("click", showFirst);
pjts[0].querySelector(".min-max-toggle").addEventListener("click", (button)=>{
	if (pjts[0].classList.contains("max")) {
		showAll();

	} else {
		showFirst();
	}
});

function showFirst() {
	if(pjts[0].classList.contains("min")){
		pjts[0].classList.remove("min");
		pjts[0].style.display = "initial";
		pjts[0].classList.add("max");
		btns[1].classList.add("button-active");
		btns[0].classList.remove("button-active");
		btns[2].classList.remove("button-active");
		btns[3].classList.remove("button-active");
	}
	pjts[1].style.display = "none";
	pjts[1].classList.add("min");
	pjts[2].style.display = "none";
	pjts[2].classList.add("min");
	changeToggeText(pjts[0]);
}

btns[2].addEventListener("click", showSecond);
pjts[1].querySelector(".min-max-toggle").addEventListener("click", (button)=>{
	if (pjts[1].classList.contains("max")) {
		showAll();
	} else {
		showSecond();
	}
});

function showSecond() {
	if(pjts[1].classList.contains("min")){
		pjts[1].classList.remove("min");
		pjts[1].style.display = "initial";
		pjts[1].classList.add("max");
		btns[2].classList.add("button-active");
		btns[0].classList.remove("button-active");
		btns[1].classList.remove("button-active");
		btns[3].classList.remove("button-active");
	}
	pjts[0].style.display = "none";
	pjts[0].classList.add("min");
	pjts[2].style.display = "none";
	pjts[2].classList.add("min");
	changeToggeText(pjts[1]);
};

btns[3].addEventListener("click", showThird);
pjts[2].querySelector(".min-max-toggle").addEventListener("click", (button)=>{
	if (pjts[2].classList.contains("max")) {
		showAll();
	} else {
		showThird();
	}
});

function showThird() {
	if(pjts[2].classList.contains("min")){
		pjts[2].classList.remove("min");
		pjts[2].style.display = "initial";
		pjts[2].classList.add("max");
		btns[3].classList.add("button-active");
		btns[0].classList.remove("button-active");
		btns[1].classList.remove("button-active");
		btns[2].classList.remove("button-active");
	}
	pjts[0].style.display = "none";
	pjts[0].classList.add("min");
	pjts[1].style.display = "none";
	pjts[1].classList.add("min");
	changeToggeText(pjts[2]);
};

function changeToggeText(project) {
	if(project.classList.contains("max")){
		project.querySelector(".min-max-toggle button").innerText = "Hide Details";
	} else {
		project.querySelector(".min-max-toggle button").innerText = "Show Details";
	}
}

function toggleMinMax(project) {
	if(project.classList.contains("max")){
		project.classList.remove("max");
		project.classList.add("min");
	} else {
		project.classList.remove("min");
		project.classList.add("max");
	}
}