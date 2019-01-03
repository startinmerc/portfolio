var letters = "Strange Industries",
	els = Array.from(document.querySelectorAll(".letter")),
	heroSub = document.querySelector("#hero-sub"),
	prompt = document.querySelector(".prompt"),
	hero = document.querySelector(".hero"),
	brand = document.querySelector(".brand"),
	container = document.querySelector(".container"),
	lines = Array.from(document.querySelectorAll(".line"));

for(let i = 0; i<letters.length; i++){
	letterRandomize(i);
	if (i===letters.length/2) {
		document.querySelector("hr").classList.add("hrVisible");
	}
}


heroSub.addEventListener("animationend", function(){
	prompt.style.opacity = 1;
});

prompt.addEventListener("click", function(){
	// hero.style.height = "0vh";
	hero.classList.toggle("hidden")
})

brand.addEventListener("click", function(){
	// hero.style.height = "100vh";
	hero.classList.toggle("hidden")
})



for(var i = 0; i<lines.length; i++){
	lineRandomize(i);
}

function letterRandomize(i) {
	let num = Math.floor(Math.random()*2500);
	els[i].style.animationDelay = num + 'ms';
	els[i].append(letters[i]);
	els[i].addEventListener("animationend", function(){
		els[i].classList.add("visible");
	});
}

function lineRandomize(i) {
	let marginLeft = Math.floor(Math.random() * (95 - 5) + 5),
		animationDuration = Math.floor(Math.random() * (8200 - 4000) + 4000),
		animationDelay = Math.floor(Math.random()*2500);
	lines[i].style.animationDelay = animationDelay + 'ms';
	lines[i].style.marginLeft = marginLeft + 'vw';
	lines[i].style.animationDuration = animationDuration + 'ms';
}