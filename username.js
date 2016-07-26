// We want to store input given to us by the user. We want to store a string
// for a username, a string for an image URL, and a string for a description.
//
// We want to spit out these strings onto an html template.

window.onload = returnInfo("result", userid);

function User(userid, pic){
	this.userid = userid;
	this.pic = pic;
}

function UserDefault(){
	this.userid = setDefault("userid");
	this.pic = setDefault("pic");
}

var storeInfo = function(source, type){
	this.source = source;
	this.type = type;
	var input = document.getElementById(source).value;

	if(typeof(Storage) !== "undefined"){
		localStorage.setItem(type, input);
		
	} else {
		document.getElementsByClassName("result").innerHTML = "Sorry! No Web Storage support";
	}
};

var returnInfo = function(source, type){
	this.type = type;
	this.source = source;
	var outputArray = document.getElementsByClassName(source);
	var myData = localStorage.getItem(type);

	for(var i = 0; i < outputArray.length; i++){
		outputArray[i] = myData;
	}
};

var setDefault = function(type){
	this.type = type;
	switch(type){
		case "userid":
			return "Guest";
		case "pic":
			return "http://blog.algonquinstudios.com/wp-content/uploads/2014/04/anonymous.gif";
	}
};

UserDefault.prototype = new User();
var myUserDefault = new UserDefault();
console.log(myUserDefault.userid);


/*
window.onload = showUsername;
window.onload = showPicture;

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
}*/