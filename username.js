window.onload = showUsername();



function getUsername(){
	var input = document.getElementById("userInput").value;
	if(typeof(Storage) !== "undefined"){
		localStorage.setItem("user", input);
	} else {
		document.getElementsByClassName("result").innerHTML = "Sorry! No Web Storage support..."
	}
	
}

function showUsername(){

	var guest = "Guest";
	var resultArray = document.getElementsByClassName("result");
	var userName = localStorage.getItem("user");

	if(userName == null){
		userName = guest;
		document.getElementById("welcome").innerHTML = "Hey there,";
	} else {
		document.getElementById("welcome").innerHTML = "Welcome back,";
	}
	
	for(var i = 0; i < resultArray.length; i++){
		resultArray[i].innerHTML = userName;
	}
	/*console.log(userName);*/
}