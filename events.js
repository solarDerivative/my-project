/*Javascript Events:
- click (browser registers a click, holding down for a while then letting go may not register as a click)
- mouseenter (mouse enters area)
- mouseleave (mouse leaves area)
- mousedown (press down on mouse button)
- mouseup (let mouse button back up)
- mousemove (moving over area)
- keydown (keyboard button pressed down)
- keyup (keyboard button let up)
- blur (area was focused, clicked out of it)
- focus (focus on area, clicked into area for example)
full list of events: https://developer.mozilla.org/en-US/docs/Web/Events 
DRY: Don't Repeat Yourself*/

var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var solution = document.getElementById("solution");
var sign = document.getElementById("sign");
var ops = document.getElementById("operation");

numOne.addEventListener("input", calculate);
numTwo.addEventListener("input", calculate);


function calculate(){
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;

	if(document.getElementById("operation").value == "add"){
		solution.innerHTML = "The sum is: " + (one + two);
	} else if(document.getElementById("operation").value == "subtract"){
		solution.innerHTML = "The difference is: " + (one - two);	
	} else if(document.getElementById("operation").value == "multiply"){
		solution.innerHTML = "The product is: " + (one * two);
	} else {
		solution.innerHTML = "The quotient is: " + (one / two);
	}

}

function clearField(){
	numOne.value = "";
	numTwo.value = "";
	solution.innerHTML = "";
}

function OnSelectedIndexChange(){
	clearField();

	if(document.getElementById("operation").value == "subtract"){
		sign.innerHTML = " - ";
	} else if(document.getElementById("operation").value == "multiply"){
		sign.innerHTML = " * ";
	} else if(document.getElementById("operation").value == "divide"){
		sign.innerHTML = " / ";
	} else {
		sign.innerHTML = " + ";
	}
	
	console.log(document.getElementById("operation").value + " is now the active operation.");
}



//////////////////////////////////////


/*var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
ben.addEventListener("click", picLink);

function picLink() {
	var allImages = document.querySelectorAll("img");

	for(var i = 0; i < allImages.length; i++){
		allImages[i].className = "hide";
	}
	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId);
	if (pic.className === "hide"){
		pic.className = "";
	} else {
		pic.className = "hide";
	}

}*/

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
	showDivs(slideIndex += n);
	
}
	
function showDivs(n){
	var i;
	var x = document.getElementsByClassName("mySlides");
	console.log(n);
	/*if (n > x.length){
		slideIndex = 1;
	}*/
	if (n < 1) {
		console.log(n + (" (n) is less than 1"));
		slideIndex = x.length;
	}
	for(i = 0; i < x.length; i++){
		x[i].style.display = "none";
	}

	x[slideIndex-1].style.display = "block";
}

//////////////////////////////////////////

var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for (i = 0; i < items.length; i++) {
	items[i].addEventListener("click", editItem);
	inputs[i].addEventListener("blur", updateItem);
	inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() {
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus();
	input.setSelectionRange(0, input.value.length);
}

function updateItem() {
	this.previousElementSibling.innerHTML = this.value;
	this.parentNode.className = "";
}

function itemKeypress(event) {
	if (event.which === 13) {
		updateItem.call(this);
	}
}