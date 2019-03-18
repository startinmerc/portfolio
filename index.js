var letters = "StrangeIndustries",
	els = Array.from(document.querySelectorAll(".letter"));

var sitesBtn = document.querySelector("#btn-show-sites"),
	cssBtn = document.querySelector("#btn-show-css"),
	audioBtn = document.querySelector("#btn-show-audio"),
	allBtn = document.querySelector("#btn-show-all"),
	portNav = document.querySelector("a[href='#Portfolio']"),
	sitesNav = document.querySelector(".dropdown li:nth-of-type(1)"),
	cssNav = document.querySelector(".dropdown li:nth-of-type(2)"),
	audioNav = document.querySelector(".dropdown li:nth-of-type(3)"),
	portEntries = document.querySelectorAll(".portfolio-entry");


for(let i = 0; i<letters.length; i++){
	letterRandomize(i);
}

function letterRandomize(i) {
	let num = Math.floor(Math.random()*2000);
	els[i].style.animationDelay = num + 'ms';
	els[i].append(letters[i]);
}

sitesBtn.addEventListener('click', showsites);
sitesNav.addEventListener('click', showsites);

function showsites() {
	portEntries.forEach(function(v,i,a){
		if (!v.classList.contains("sites")) {
			v.classList.add("hidden");
		} else {
			v.classList.remove("hidden");
		}
	});
	sitesBtn.classList.add("button-active");
	cssBtn.classList.remove("button-active");
	audioBtn.classList.remove("button-active");
	allBtn.classList.remove("button-active");
}

cssBtn.addEventListener('click', showcss);
cssNav.addEventListener('click', showcss);


function showcss() {
	portEntries.forEach(function(v,i,a){
		if (!v.classList.contains("css")) {
			v.classList.add("hidden")
		} else {
			v.classList.remove("hidden");
		}
	});
	sitesBtn.classList.remove("button-active");
	cssBtn.classList.add("button-active");
	audioBtn.classList.remove("button-active");
	allBtn.classList.remove("button-active");
}

audioBtn.addEventListener('click', showaudio);
audioNav.addEventListener('click', showaudio);

function showaudio() {
	portEntries.forEach(function(v,i,a){
		if (!v.classList.contains("audio")) {
			v.classList.add("hidden")
		} else {
			v.classList.remove("hidden");
		}
	})
	sitesBtn.classList.remove("button-active");
	cssBtn.classList.remove("button-active");
	audioBtn.classList.add("button-active");
	allBtn.classList.remove("button-active");
}

allBtn.addEventListener('click', showall);
portNav.addEventListener('click', showall);

function showall() {
	portEntries.forEach(function(v,i,a){
		v.classList.remove("hidden");
	});
	sitesBtn.classList.remove("button-active");
	cssBtn.classList.remove("button-active");
	audioBtn.classList.remove("button-active");
	allBtn.classList.add("button-active");
}