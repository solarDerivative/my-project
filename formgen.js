var list = document.getElementById("test44").children;
var panArray = [];
for(var i = 0; i < list.length; i++) {
	var arrValue = list[i].innerHTML;
	console.log(arrValue);
	panArray.push(arrValue);
}