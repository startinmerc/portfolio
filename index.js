var letters = "StrangeIndustries",
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
var portNavLinks = document.querySelectorAll("a[href='#Portfolio']"),
	portBtns = document.querySelectorAll("#Portfolio button"),
	portEntries = document.querySelectorAll(".portfolio-entry");
	portUpdates = [showall,showsites,showcss,showaudio]

// ALL, SITES, CSS, AUDIO
for (var i = portBtns.length - 1; i >= 0; i--) {
	portBtns[i].addEventListener('click', portUpdates[i]);
	portNavLinks[i].addEventListener('click', portUpdates[i]);
}

function showall() {
	portEntries.forEach((entry) => {
		entry.classList.remove("hidden");
	});
	portBtns[0].classList.add("button-active");
	portBtns[1].classList.remove("button-active");
	portBtns[2].classList.remove("button-active");
	portBtns[3].classList.remove("button-active");
}

function showsites() {
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

function showcss() {
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

function showaudio() {
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