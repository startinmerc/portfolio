var letters = "StrangeIndustries",
	els = Array.from(document.querySelectorAll(".letter"));

var sitesBtn = document.querySelector("#btn-show-sites"),
	cssBtn = document.querySelector("#btn-show-css"),
	audioBtn = document.querySelector("#btn-show-audio"),
	allBtn = document.querySelector("#btn-show-all"),
	portEntries = document.querySelectorAll(".portfolio-entry");


for(let i = 0; i<letters.length; i++){
	letterRandomize(i);
}

function letterRandomize(i) {
	let num = Math.floor(Math.random()*2000);
	els[i].style.animationDelay = num + 'ms';
	els[i].append(letters[i]);
}

sitesBtn.addEventListener('click', function() {
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
})

cssBtn.addEventListener('click', function() {
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
})

audioBtn.addEventListener('click', function() {
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
})

allBtn.addEventListener('click', function() {
	portEntries.forEach(function(v,i,a){
		v.classList.remove("hidden");
	});
	sitesBtn.classList.remove("button-active");
	cssBtn.classList.remove("button-active");
	audioBtn.classList.remove("button-active");
	allBtn.classList.add("button-active");
})

