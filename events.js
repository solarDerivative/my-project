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
var addSum = document.getElementById("add-sum")


numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add(){
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	addSum.innerHTML = "The sum is: " + (one + two);
}


var simon = document.getElementById("simon");
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

}