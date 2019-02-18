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