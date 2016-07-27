// We want to store input given to us by the user. We want to store a string
// for a username, a string for an image URL, and a string for a description.
//
// We want to spit out these strings onto an html template.


/*function User(userid, pic){
	this.userid = userid;
	this.pic = pic;
}

function UserDefault(){
	this.userid = setDefault("userid");
	this.pic = setDefault("pic");
}*/

function InfoHandler(type, button, inputfield, outputfields, storedloc){
	this.type = type;
	this.button = button;
	this.inputfield = inputfield;
	this.outputfields = outputfields;
	this.storedloc = storedloc;
	this.saveInfo = function saveInfo(){
   		if(typeof(Storage) !== "undefined"){
     		localStorage.this.storedloc = inputfield.value;
    	} else {
      		document.getElementsByClassName("result").innerHTML = "Sorry! No Web Storage support";
    	}
    	alert("Finished saveInfo()!");
    	console.log(type);
    	console.log(button);
    	console.log(inputfield);
    	console.log(inputfield.value);
    	console.log(outputfields);
    	console.log(storedloc);
    	console.log(localStorage.this.storedloc);
	};

	//TODO: consolidate switch-using methods
	this.returnInfo = function returnInfo(){
		alert("Starting returnInfo()!");
    	console.log(type);
    	console.log(button);
    	console.log(inputfield);
    	console.log(inputfield.value);
    	console.log(outputfields);
    	console.log(storedloc);
    	console.log(localStorage.this.storedloc);

		if(localStorage.this.storedloc === undefined){
      		localStorage.this.storedloc = this.useGeneric();
		}

		for(var i = 0; i < outputfields.length; i++){
			switch(type){
				case "userName":
					outputfields[i].innerHTML = localStorage.this.storedloc;
					break;
				case "userPic":
					outputfields[i].src = localStorage.this.storedloc;
					break;
			}
		}

		alert("Finished returnInfo()!");
    	console.log(type);
    	console.log(button);
    	console.log(inputfield);
    	console.log(inputfield.value);
    	console.log(outputfields);
    	console.log(storedloc);
    	console.log(localStorage.this.storedloc);
	};

	this.useGeneric = function useGeneric(){
		alert(this.type);
		switch(this.type){
		case "userName":
			return "Guest";
		case "userPic":
			return "http://blog.algonquinstudios.com/wp-content/uploads/2014/04/anonymous.gif";
		}
	};

	/*var returnInfo = function returnInfo(source, type){
	this.type = type;
	this.source = source;
  var str = type.name;
	var outputArray = document.getElementsByClassName(source);
	var myData = localStorage.getItem(type);
  
  if(type === null){
    type = setDefault(str);
  }
  
	for(var i = 0; i < outputArray.length; i++){
		outputArray[i] = myData;
	}
};*/
  
	this.button.addEventListener("click", this.saveInfo);
  
  	/*this.saveInput = function(){
		if(typeof(Storage) !== "undefined"){
			localStorage.setItem(type, input);
			console.log("Saving the input at localStorage." + source);
		} else {
			document.getElementsByClassName("result").innerHTML = "Sorry! No Web Storage support";
		}
	};*/
}

/*function storeInfo(source, type){
	this.source = source;
	this.type = type;
	console.log(source);
	console.log(type);
	var input = document.getElementById(type);
	console.log(input);

	if(typeof(Storage) !== "undefined"){
		localStorage.setItem(type, input);
		console.log("Saving the input at localStorage." + source);
	} else {
		document.getElementsByClassName("result").innerHTML = "Sorry! No Web Storage support";
	}
}

var storeInfo = function storeInfo(type, source){
	this.source = source;
	this.type = type;
	var input = document.getElementById(source).value;
	console.log(input);

	if(typeof(Storage) !== "undefined"){
		localStorage.setItem(type, input);
		console.log(localStorage.getItem(type));
	} else {
		document.getElementsByClassName("result").innerHTML = "Sorry! No Web Storage support";
	}
};

function checkStored(){
	if(localStorage.getItem("test")){
		console.log("Ok");
	} else {
		console.log("I don't even know :/");
	}
}*/

/*var returnInfo = function returnInfo(source, type){
	this.type = type;
	this.source = source;
  var str = type.name;
	var outputArray = document.getElementsByClassName(source);
	var myData = localStorage.getItem(type);
  
  if(type === null){
    type = setDefault(str);
  }
  
	for(var i = 0; i < outputArray.length; i++){
		outputArray[i] = myData;
	}
};

var setDefault = function setDefault(type){
	this.type = type;
	switch(type){
		case "userid":
			return "Guest";
		case "pic":
			return "http://blog.algonquinstudios.com/wp-content/uploads/2014/04/anonymous.gif";
	}
};*/

/*UserDefault.prototype = new User();
var myUserDefault = new UserDefault();*/

var butN = document.getElementById("nameButton");
var inpN = document.getElementById("nameInput");
var oupN = document.getElementsByClassName("nameOutput");
var butP = document.getElementById("picButton");
var inpP = document.getElementById("picInput");
var oupP = document.getElementsByClassName("picOutput");
var myNameHandler = new InfoHandler("userName", butN, inpN, oupN, "name1");
var myPicHandler = new InfoHandler("userPic", butP, inpP, oupP, "pic1");

window.onload = myNameHandler.returnInfo();
window.onload = myPicHandler.returnInfo();

/*
var nameListener = document.getElementById("nameButton");
var nameListenerField = document.getElementById("nameInput");
console.log("(1) var nameListenerField =" + nameListenerField);
nameListener.addEventListener("click", storeInfo("test", nameListenerField.value));
*/

/*console.log(myUserDefault.userid);*/
/*
console.log(nameListener);
console.log(nameListenerField);
window.onload = checkStored;
*/
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