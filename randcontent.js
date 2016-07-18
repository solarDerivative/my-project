/*
TODO
	-Create an array of all elements (let's start with just four) with class name "revpanel"
	^	-var heebleglorken = document.getAllElementsByClassName("revpanel");
	
	
		-first, I should go make all panels hidden by default in css probably (no?)
		-loop through the array of review panels.
		-each time, choose one of the panels at random.
			-Make a random number generator to produce a value between one and the length of the array
		-At the index of (result of RNG), set the revpanel display to inline
		-Remove element from array
		-^ Complete this loop a total of three times

	-for(i = 0; i < 3; i++)

*/
window.onload = displayRand();

function displayRand(){
	var contElems = document.getElementsByClassName("revpanel");
	var contentArray = Array.prototype.slice.call( contElems, 0);

	var revPanels = document.querySelector(".revPanels");
	console.log(revPanels);

	for(var i = revPanels.children.length; i >= 0; i--){
		revPanels.appendChild(revPanels.children[Math.random()*i | 0]);
	}
	

	for(var i = 0; i < 3; i++){
		var rand = Math.floor(Math.random()*contentArray.length);
		console.log(rand);
		contentArray[rand].style.display="block";
		contentArray.splice(rand, 1);
		console.log(contentArray);
		
	}
}