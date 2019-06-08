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

// Portfolio Logic
const portNavLinks = document.querySelectorAll("a[href='#portfolio']"),
	portBtns = document.querySelectorAll("#portfolio button"),
	portEntries = document.querySelectorAll(".portfolio-entry");
	portUpdates = [showAll,showSites,showCss,showAudio]

// ALL, SITES, CSS, AUDIO
for (var i = portBtns.length - 1; i >= 0; i--) {
	portBtns[i].addEventListener('click', portUpdates[i]);
	portNavLinks[i].addEventListener('click', portUpdates[i]);
}

function showAll() {
	portEntries.forEach((entry) => {
		entry.classList.remove("hidden");
	});
	portBtns[0].classList.add("button-active");
	portBtns[1].classList.remove("button-active");
	portBtns[2].classList.remove("button-active");
	portBtns[3].classList.remove("button-active");
}

function showSites() {
	portEntries.forEach((entry) => {
		if (!entry.classList.contains("sites")) {
			entry.classList.add("hidden");
		} else {
			entry.classList.remove("hidden");
		}
	});
	portBtns[0].classList.remove("button-active");
	portBtns[1].classList.add("button-active");
	portBtns[2].classList.remove("button-active");
	portBtns[3].classList.remove("button-active");
}

function showCss() {
	portEntries.forEach((entry) => {
		if (!entry.classList.contains("css")) {
			entry.classList.add("hidden")
		} else {
			entry.classList.remove("hidden");
		}
	});
	portBtns[0].classList.remove("button-active");
	portBtns[1].classList.remove("button-active");
	portBtns[2].classList.add("button-active");
	portBtns[3].classList.remove("button-active");
}

function showAudio() {
	portEntries.forEach((entry) => {
		if (!entry.classList.contains("audio")) {
			entry.classList.add("hidden")
		} else {
			entry.classList.remove("hidden");
		}
	})
	portBtns[0].classList.remove("button-active");
	portBtns[1].classList.remove("button-active");
	portBtns[2].classList.remove("button-active");
	portBtns[3].classList.add("button-active");
}