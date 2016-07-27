window.onload = showUsername();
window.onload = showPicture();
window.onload = createReview();

//objects
//inputs - strings

var inputName = document.getElementById("inputN");
var inputImg = document.getElementById("inputI");
var inputBody = document.getElementById("inputB");

//outputs - arrays

var outputName = document.getElementsByClassName("outputN");
var outputImg = document.getElementsByClassName("outputI");
var outputBody = document.getElementsByClassName("outputB");

//object constructors

function user(name, img){
	//"methods" which call values
	this.userName = name;
	this.userImg = img;
}

function post(name, img, body){
	//"methods" which point to values
	this.postName = name;
	this.postImg = img;
	this.postBody = body;
}

//high-end, non-specific functions - need setDefaults (ACTUALLY that could go into user right?)

function getAndStoreData(input, store){
	//"methods" which call values
	this.inputType = input;
	this.storedDataInput = store;

	if(typeof(Storage) !== "undefined"){
		localStorage.setItem(store, input);
	} else {
		document.getElementsByClassName("result").innerHTML = "Sorry! No Web Storage support...";
	}
}

function showData(output, store){
	this.outputType = output;
	this.storedDataOutput = store;

	for(var i = 0; i < output.length; i++){
		output[i].innerHTML = store;
	}
}
/*
function getUsername(){
	var input1 = document.getElementById("nameInput").value;
	if(typeof(Storage) !== "undefined"){
		localStorage.setItem("user", input1);
	} else {
		document.getElementsByClassName("result").innerHTML = "Sorry! No Web Storage support..."
	}
}

function showUsername(){

	var guest1 = "Guest";
	var resultArray = document.getElementsByClassName("result");
	var userName = localStorage.getItem("user");

	if(userName == null){
		userName = guest1;
		document.getElementById("welcome").innerHTML = "Hey there,";
	} else {
		document.getElementById("welcome").innerHTML = "Welcome back,";
	}
	
	for(var i = 0; i < resultArray.length; i++){
		resultArray[i].innerHTML = userName;
	}
}

function getPicture(){
	var input2 = document.getElementById("picInput").value;
	if(typeof(Storage) !== "undefined"){
		localStorage.setItem("picture", input2);
	} else {
		document.getElementsByClassName("result").innerHTML = "Sorry! No Web Storage support..."
	}
}

function showPicture(){
	var guest2 = "http://blog.algonquinstudios.com/wp-content/uploads/2014/04/anonymous.gif"
	var userPic = document.getElementsByClassName("myImg");
	var pic = localStorage.getItem("picture");

	if(pic == null){
		pic = guest2;
	}

	for(var i = 0; i < userPic.length; i++){
		userPic[i].src = pic;
	}
}

function getReview(){
	var input3 = document.getElementById("descInput");
	if(typeof(Storage) !== "undefined"){
		localStorage.setItem("description", input3);
	} else {
		document.getElementsByClassName("result").innerHTML = "Sorry! No Web Storage support..."
	}
}

function createReview(){

	var guest3 = "test description";
	var otptB = document.getElementById("userB");
	var otptH = document.getElementById("userH");
	var otptP = document.getElementById("userP");
	var userDesc = localStorage.getItem("description");

	if(userDesc == null){
		userDesc = guest3;
	}
	
}*/