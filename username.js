function InfoHandler(type, button, inputfield, outputfields, ref){
	this.type = type;
	this.button = button;
	this.inputfield = inputfield;
	this.outputfields = outputfields;
	this.ref = ref;

	this.saveInfo = function saveInfo(){
  	var input = inputfield.value;
   		if(typeof(Storage) !== "undefined"){
        	localStorage.setItem(ref, input);
    	} else {
      		document.getElementsByClassName("result").innerHTML = "Sorry! No Web Storage support";
    	}
	};
	this.button.addEventListener("click", this.saveInfo);
	//TODO: consolidate switch-using methods
	this.returnInfo = function returnInfo(){
		var isDefault = this.useGeneric();
		var input2 = localStorage.getItem(ref);
    	if(input2 == null){
      		input2 = isDefault;
		}
		for(var i = 0; i < outputfields.length; i++){
			switch(type){
				case "userName":
					outputfields[i].innerHTML = input2;
					break;
				case "userPic":
					outputfields[i].src = input2;
					break;
			}
		}
	};
	this.useGeneric = function useGeneric(){
		switch(this.type){
		case "userName":
			return "Guest";
		case "userPic":
			return "http://blog.algonquinstudios.com/wp-content/uploads/2014/04/anonymous.gif";
		}
	};
}

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

// We want to store input given to us by the user. We want to store a string
// for a username, a string for an image URL, and a string for a description.
//
// We want to spit out these strings onto an html template.
// localStorage.getItem(x)
// gets whatever value is stored in localStorage's "x"
// localStorage.setItem(x, value);
// stores a value in localStorage's "x"

/*
	   		DEEEEEEEEEEBBBUUUUUUUUUUGGGGGGGGGGG
	    	alert("Starting saveInfo()!");
	    	console.log("Starting saveInfo()!");
	    	console.log("type: " + type);
	    	console.log("this.type: " + this.type);
	    	console.log(button);
	    	console.log(inputfield);
	    	console.log(inputfield.value);
	    	console.log(outputfields);
	    	console.log(this.outputfields);
	    	console.log(input);
	    	console.log(savedval);
	    	console.log(this.savedval);
	    	console.log(ref);
	    	console.log(this.ref);
	    	console.log("//////");
	    	*/

/*function User(userid, pic){
	this.userid = userid;
	this.pic = pic;
}

function UserDefault(){
	this.userid = setDefault("userid");
	this.pic = setDefault("pic");
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
};*/
  
  	/*this.saveInput = function(){
		if(typeof(Storage) !== "undefined"){
			localStorage.setItem(type, input);
			console.log("Saving the input at localStorage." + source);
		} else {
			document.getElementsByClassName("result").innerHTML = "Sorry! No Web Storage support";
		}
	};*/

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