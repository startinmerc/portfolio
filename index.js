var letters = "Strange Industries",
	els = Array.from(document.querySelectorAll(".letter")),
	heroSub = document.querySelector("#hero-sub"),
	prompt = document.querySelector(".prompt"),
	scroll = document.documentElement.scrollTop;

for(let i = 0; i<letters.length; i++){
	let num = Math.floor(Math.random()*2500);
	els[i].style.animationDelay = num + 'ms';
	els[i].append(letters[i]);
	els[i].addEventListener("animationend", function(){
		els[i].classList.add("visible");
	});
}

heroSub.addEventListener("animationend", function(){
	prompt.style.opacity = 1;
});