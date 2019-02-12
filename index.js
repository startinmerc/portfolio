var letters = "StrangeIndustries",
	els = Array.from(document.querySelectorAll(".letter")),
	heroSub = document.querySelector(".hero-sub"),
	prompt = document.querySelector(".prompt"),
	hero = document.querySelector("#hero"),
	brand = document.querySelector("nav a"),
	container = document.querySelector(".container"),
	lines = Array.from(document.querySelectorAll(".line")),
	sections = Array.from(document.querySelectorAll("section")),
	links = Array.from(document.querySelector("nav").querySelectorAll("a"));

for(let i = 0; i<letters.length; i++){
	letterRandomize(i);
}

links.forEach(function(link){
	link.addEventListener("click", function(){
	if(link.text=="About" && sections[0].classList.contains("sectionShown") == false){
		sections[0].classList.add("sectionShown", "full-height");
		sections[1].classList.add("sectionHidden", "no-height");
		sections[2].classList.add("sectionHidden", "no-height");
		sections[0].classList.remove("sectionHidden", "no-height");
		sections[1].classList.remove("sectionShown", "full-height");
		sections[2].classList.remove("sectionShown", "full-height");
	}
	if(link.text=="Portfolio" && sections[1].classList.contains("sectionShown") == false){
		sections[1].classList.add("sectionShown", "full-height");
		sections[0].classList.add("sectionHidden", "no-height");
		sections[2].classList.add("sectionHidden", "no-height");
		sections[1].classList.remove("sectionHidden", "no-height");
		sections[0].classList.remove("sectionShown", "full-height");
		sections[2].classList.remove("sectionShown", "full-height");
	}
	if(link.text=="Contact" && sections[2].classList.contains("sectionShown") == false){
		sections[2].classList.add("sectionShown", "full-height");
		sections[0].classList.add("sectionHidden", "no-height");
		sections[1].classList.add("sectionHidden", "no-height");
		sections[2].classList.remove("sectionHidden", "no-height");
		sections[0].classList.remove("sectionShown", "full-height");
		sections[1].classList.remove("sectionShown", "full-height");
	}
	});
})



prompt.addEventListener("click", function(){
	hero.classList.toggle("no-height");
	hero.classList.toggle("full-height");
})

brand.addEventListener("click", function(){
	hero.classList.toggle("no-height");
	hero.classList.toggle("full-height");
})



for(var i = 0; i<lines.length; i++){
	lineRandomize(i);
}

function letterRandomize(i) {
	let num = Math.floor(Math.random()*2000);
	els[i].style.animationDelay = num + 'ms';
	els[i].append(letters[i]);
}

function lineRandomize(i) {
	let marginLeft = Math.floor(Math.random() * (95 - 5) + 5),
		animationDuration = Math.floor(Math.random() * (8200 - 4000) + 4000),
		animationDelay = Math.floor(Math.random()*2500);
	lines[i].style.animationDelay = animationDelay + 'ms';
	lines[i].style.marginLeft = marginLeft + 'vw';
	lines[i].style.animationDuration = animationDuration + 'ms';
}