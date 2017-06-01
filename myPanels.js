window.onload = makeDupe();
window.onload = displayOrder();

function makeDupe(){
	var allPans = document.querySelector(".makePanelTest");
	var genElems = document.querySelector(".dupePanel");
	console.log(genElems);

	for(var j = 0; j < Number(localStorage.count); j++){
		allPans.appendChild(genElems.cloneNode(true));
	}
}

function displayOrder(){
	//contElems is a NodeList object
	var contElems = document.getElementsByClassName("randPanTest");
	//converting NodeList into an Array
	var contentArray = Array.prototype.slice.call(contElems);
	console.log(contentArray);
	console.log(contentArray.length);
	contentArray.pop();
	console.log(contentArray);
	console.log(contentArray.length);
	var randPanels = document.querySelector(".randPanelTest");
	console.log(randPanels);
	console.log(contentArray.length);
	//randomizes order of posts before displaying
	for(var i = contentArray.length; i >= 0; i--){
		randPanels.appendChild(randPanels.children[Math.random()*i | 0]);
	}
	

	for(var k = 0; k < contentArray.length; k++){
		contentArray[k].style.display="block";
		
	}
}