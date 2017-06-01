
/*function CountSetter(){
	this.setLocalCount = function setLocalCount(){
		var check = localStorage.getItem("count");
		if(check === null){
			localStorage.setItem("count", 0);
		}
		console.log(localStorage.getItem("count"));
	};
	var raiseCount = function raiseCount(){
    	if(typeof(Storage) !== "undefined"){
    		if(localStorage.count){
    			console.log(localStorage.count);
        		localStorage.count = Number(localStorage.count) + 1;
      		} else {
        		document.getElementsByClassName("result").innerHTML = "Sorry! No Web Storage support";
   			}
   		}
   		console.log(localStorage.count);
	};
}*/

function InfoHandler(type, button, inputfield, outputfields, outputrandom){
	this.type = type;
	this.button = button;
	this.inputfield = inputfield;
	this.outputfields = outputfields;
	this.outputrandom = outputrandom;

	var ref = this.type + localStorage.getItem("count");
	console.log(ref);

	this.saveInfo = function saveInfo(){
		console.log("clicked?!?!");
  		var input = inputfield.value;
   		if(typeof(Storage) !== "undefined"){
        	localStorage.setItem(ref, input);
    	} else {
      		document.getElementsByClassName("result").innerHTML = "Sorry! No Web Storage support";
    	}
	};
			
	if(button){
		button.addEventListener("click", this.saveInfo);
	}

	//TODO: consolidate switch-using methods?
	this.returnInfo = function returnInfo(){
		var isDefault = this.useGeneric();
		/*console.log("ref: " + ref);
		console.log("localStorage.getItem(ref): " + localStorage.getItem(ref));
		console.log("localStorage.ref: " + localStorage.ref);*/
		var input2 = localStorage.getItem(ref);
		console.log("input2 of " + this.type + " : " + input2);

		console.log("Number(localStorage.temp): " + Number(localStorage.temp));
		var prevRef = this.type + localStorage.getItem("temp");
		console.log("prevRef of " + this.type + " : " + prevRef);
    	if(input2 == null){
    		if(Number(localStorage.temp) >= 0){
    			console.log("input2 == null && Number(localStorage.temp) was >= 0");
    			input2 = localStorage.getItem(prevRef);
    			console.log("Therefore, input2 of " + this.type + " has been set to " + input2);
    			console.log("localStorage.getItem(ref) before setting to input2: " + localStorage.getItem(ref) + " where ref is " + ref);
    			localStorage.setItem(ref, input2);
    			console.log("localStorage.getItem(ref) after setting to input2: " + localStorage.getItem(ref) + " where ref is " + ref);
    			
    		} else {
    			console.log("input2 == null && Number(localStorage.temp) was NOT >= 0");
      			input2 = isDefault;
      		}
		} else {
			console.log("input2 of " + this.type + " was not null");
		}
		for(var i = 0; i < outputfields.length; i++){
			switch(type){
				case "userName":
					outputfields[i].innerHTML = input2;
					break;
				case "userDesc":
					outputfields[i].innerHTML = input2;
					break;
				case "userPic":
					outputfields[i].src = input2;
					break;
			}
		}
	};

	this.returnRand = function returnRand(){
		var isDefault = this.useGeneric();
		var tempRef = this.type + 0;
		var input3 = localStorage.getItem(tempRef);
		console.log("input3 of " + this.type + " : " + input3);

		for(var i = 0; i < outputrandom.length; i++){
			tempRef = this.type + i;
			if(input3){
				input3 = localStorage.getItem(tempRef);
			} else {
				input3 = isDefault;
			}
			switch(type){
				case "userName":
					outputrandom[i].innerHTML = input3;
					break;
				case "userDesc":
					outputrandom[i].innerHTML = input3;
					break;
				case "userPic":
					outputrandom[i].src = input3;
					break;
			}
		}
	};

	this.useGeneric = function useGeneric(){
		switch(this.type){
		case "userName":
			return "Guest";
		case "userPic":
			return "https://www.appointbetterboards.co.nz/Custom/Appoint/img/avatar-large.png";
		case "userDesc":
			return "Test Description";
		}
	};
}

//var genElems = document.querySelector(".dupePanel");

var butN = document.getElementById("nameButton");
var inpN = document.getElementById("nameInput");
var oupN = document.getElementsByClassName("nameOutput");
var butP = document.getElementById("picButton");
var inpP = document.getElementById("picInput");
var oupP = document.getElementsByClassName("picOutput");
var butD = document.getElementById("descButton");
var inpD = document.getElementById("descInput");
var oupD = document.getElementsByClassName("descOutput");

// RAND PANEL VARS!!

var oupRandN = document.getElementsByClassName("nameFILLER");
var oupRandP = document.getElementsByClassName("picFILLER");
var oupRandD = document.getElementsByClassName("descFILLER");

// end randpanelvars

var butW = document.getElementById("writeButton");
if(butW){
	butW.addEventListener("click", raiseCount);
}

var butC = document.getElementById("clearButton");
if(butC){
	butC.addEventListener("click", clearLocal);
}

window.onload = setLocalCount();
var myNameHandler = new InfoHandler("userName", butN, inpN, oupN, oupRandN);
var myPicHandler = new InfoHandler("userPic", butP, inpP, oupP, oupRandP);
var myDescHandler = new InfoHandler("userDesc", butD, inpD, oupD, oupRandD);

window.onload = myPicHandler.returnInfo();
window.onload = myDescHandler.returnInfo();
window.onload = myNameHandler.returnInfo();

//window.onload = makeDupe();

window.onload = myPicHandler.returnRand();
window.onload = myDescHandler.returnRand();
window.onload = myNameHandler.returnRand();

//this function just *will not* work if placed in the Writer class, not sure why?

function setLocalCount(){
	var check = localStorage.getItem("count");
	console.log(check);
	localStorage.temp = Number(localStorage.count) -1;
	if(check === null || Number(check) == 0){
		document.getElementById("welcome").innerHTML = "Hey there,";
		localStorage.setItem("count", 0);
	} else {
		document.getElementById("welcome").innerHTML = "Welcome back,";
	}
	console.log("Counter is at: " + localStorage.getItem("count"));
	console.log("-1 Counter is at: " + localStorage.temp);
}

function raiseCount(){
    if(typeof(Storage) !== "undefined"){
    	if(localStorage.count){
    		console.log(localStorage.count);
        	localStorage.count = Number(localStorage.count) + 1;
        	
      	} else {
        	document.getElementsByClassName("result").innerHTML = "Sorry! No Web Storage support";
   		}
   	}
  	console.log(localStorage.count);
  	alert("Count Raised");
	location.reload();
}

function clearLocal(){
	localStorage.clear();
	setLocalCount();
	alert('localStorage cleared! Username and Profile Picture reset.');
	location.reload();
}

/*function makeDupe(){
	var allPans = document.querySelector(".makePanelTest");
	var genElems = document.querySelector(".dupePanel");
	console.log(genElems);
	//var dupNode = genElems.cloneNode(true);
	//console.log(dupNode);
	for(var j = 0; j < Number(localStorage.count); j++){
		allPans.appendChild(genElems.cloneNode(true));
	}
}*/

/*function displayRand(){
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
	//randomizes order of posts before displaying
	for(var i = randPanels.children.length-1; i >= 0; i--){
		randPanels.appendChild(randPanels.children[Math.random()*i | 0]);
	}
	
	for(var k = 0; k < 3; k++){
		var rand = Math.floor(Math.random()*contentArray.length);
		console.log(rand);
		contentArray[rand].style.display="block";
		contentArray.splice(rand, 1);
		console.log(contentArray);
		
	}
}*/


////////////////////////////////////////////



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
	    	console.log(ref);
	    	console.log(this.ref);
	    	console.log("//////");
*/

/*function Writer() {
	var nameCurrent = localStorage.getItem("name1");
   	var picCurrent = localStorage.getItem("pic1");
    var descCurrent = localStorage.getItem("desc1");
	var storeArray = [];
	console.log();
	var counter = parseInt(localStorage.getItem("count"));
		console.log(counter);
	this.getCurrent = function getCurrent(){
		console.log("clicked?");
    	var arrayCurrent = [nameCurrent, picCurrent, descCurrent];
    		console.log(arrayCurrent);
    		console.log(counter);
    	storeArray = arrayCurrent;
    	localStorage.setItem("postarray", JSON.stringify(storeArray));
    		console.log(storeArray);
    	var raiseCount = function raiseCount(){
    		if(typeof(Storage) !== "undefined"){
    			if(localStorage.count){
    				console.log(localStorage.count);
        			localStorage.count = Number(localStorage.count) + 1;
      			} else {
        			document.getElementsByClassName("result").innerHTML = "Sorry! No Web Storage support";
   				}
   			}
   			console.log(localStorage.count);
		};
		raiseCount();
		console.log("/////");
		alert("look");
		window.location.reload();
	};
}*/

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