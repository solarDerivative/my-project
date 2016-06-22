// DRY: Don't Repeat Yourself
// goal is as few lines of code as possible
// types of loops: while, do, for

/*function go(name, age){
	alert(name);
	alert(age);
}

go('YDRICK', 22);
go('FELGRAMOSH', 99280)*/

/*function add(first, second){
	return first+second;
	alert('howdy');
}
/*var sum = add(1,2);
alert(sum); v less code*/
// alert( add(1,2) );

/*function go(name, age){
	if (age < 20){
		return name+'!'
	} else {
		return name;
	}
}

alert( go('YDRICK', 18) );*/

/* !! This code will create a message showing math... happening !!
function add(first, second){
	return first+second;
}

function subtract(first, second){
	return first-second;
}

function multiply(first, second){
	return first*second;
}
function divide (first, second){
	return first/second;
}

alert('Sum of 43 and 21: ' + add(43,21) + '\nDifference of 43 and 21: '
	+ subtract(43,21) + '\nProduct of 43 and 21: ' + multiply(43,21) +
	'\nQuotient of 43 and 21: ' + divide(43,21)); */

/*var myList =['apples', 'oranges', 'bananas'];

myList.forEach(function(value, index){
	alert('I have '+value+' in my shopping bag');
});*/

/*var times = 0;
while(times < 10){
	console.log('tried it', times);
	times++;
}*/

/*var times = 0;

do{
	console.log('tried it', times);
	times++;
} while(times < 10);*/

/*var myList = ['Apples', 'Oranges', 'Bananas'];
//value, comparison, change
for(var i=0; i < myList.length; i++){
	alert('you have '+myList[i]+' in your basket');
}*/