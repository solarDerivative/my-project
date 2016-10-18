var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var colorHover = document.getElementById('color');
var colorSelected = document.getElementById('color2');
var colorDefined = document.getElementById('color3');
var colorTotal = document.getElementById('colorTotal');
var colorMsg = document.getElementById('colorMsg');

rInput = document.getElementById("r");
gInput = document.getElementById("g");
bInput = document.getElementById("b");

hInput = document.getElementById("h");
sInput = document.getElementById("s");
lInput = document.getElementById("l");

var img0 = new Image();
var img1 = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();
var img5 = new Image();
var img6 = new Image();
var img7 = new Image();
var img8 = new Image();
img0.src = 'testimage0.png';
img1.src = 'testimage1.png';
img2.src = 'testimage2.png';
img3.src = 'testimage3.png';
img4.src = 'testimage4.png';
img5.src = 'testimage5.png';
img6.src = 'testimage6.png';
img7.src = 'testimage7.png';
img8.src = 'testimage8.png';
/*
img.crossOrigin = "Anonymous";
img2.crossOrigin = "Anonymous";
*/
var colorA;
var colorB = [];
//var colorC = [];

function hsl(h, s, l) {
	return "hsl(" + h + "," + s + "%," + l +"%)";
}

function componentToHex(c){
	var hex1 = parseInt(c);
	var hex2 = hex1.toString(16);
	return hex2.length == 1 ? "0" + hex2 : hex2;
}

app.controller('canvCtrl', ['$scope', function($scope) {

	/*

	$scope.characters = [{
		charId: 0,
		charName: 'Link',
		source: img0,
		colors: [{
			sectId:0, sectName: 'Hair', vals:[{
				r: 122, g: 53, b: 0, a: 255
			}],
			sectId:1, sectName: 'Tunic', vals:[{
				r: 122, g: 192, b: 0, a: 255
			}],
			sectId:2, sectName: 'Skin', valus:[{
				r: 214, g: 133, b: 17, a: 255
			}]
		}]
	}, {
		charId: 1,
		charName: 'Zetterburn',
		source: img1,
		colors: [{
			sectId:0, sectName: 'Body', vals: [{
	
			}],
			sectId:1, sectName: 'Hands', vals: [{
	
			}],
			sectId:2, sectName: 'Fire1', vals: [{
	
			}],
			sectId:3, sectName: 'Fire2', vals: [{
	
			}],
			sectId:4, sectName: 'Fire3', vals: [{
	
			}],
			sectId:5, sectName: 'Uneditables', vals: [{
	
			}]
		}]
	}, {
		charId: 2,
		charName: 'Orcane',
		source: img2,
		colors: [{
			sectId:0, sectName: 'Body', vals: [{
	
			}],
			sectId:1, sectName: 'Belly', vals: [{
	
			}],
			sectId:2, sectName: 'Uneditables', vals: [{
	
			}]
		}]
	}, {
		charId: 3,
		charName: 'Kragg',
		source: img3,
		colors: [{
			sectId:0, sectName: 'Rock', vals: [{
	
			}],
			sectId:1, sectName: 'Skin', vals: [{
	
			}],
			sectId:2, sectName: 'Armor', vals: [{
	
			}],
			sectId:3, sectName: 'Shading', vals: [{
	
			}],
			sectId: 4, sectName: 'Uneditables', vals: [{
	
			}]
		}]
	}, {
		charId: 4,
		charName: 'Wrastor',
		source: img4,
		colors: [{
			sectId: 0, sectName: 'Body', vals [{
				
			}],
			sectId: 1, sectName: 'Hands', vals [{
				
			}],
			sectId: 2, sectName: 'Scarf', vals [{
				
			}],
			sectId: 3, sectName: 'Belly', vals [{
				
			}],
			sectId: 4, sectName: 'Beak', vals [{
				
			}],
			sectId: 5, sectName: 'Uneditables', vals [{
	
			}]
		}]
	}, {
		charId: 5,
		charName: 'Forsburn',
		source: img5,
		colors: [{
			sectId: 0, sectName: 'Cloak 1', vals [{
				
			}],
			sectId: 1, sectName: 'Body', vals [{
				
			}],
			sectId: 2, sectName: 'Fire 1', vals [{
				
			}],
			sectId: 3, sectName: 'Fire 2', vals [{
				
			}],
			sectId: 4, sectName: 'Fire 3', vals [{
				
			}],
			sectId: 5, sectName: 'Cloak 2', vals [{
				
			}],
			sectId: 6, sectName: 'Skull', vals [{
				
			}],
			sectId: 7, sectName: 'Uneditables', vals [{
				
			}]
		}]
		
	}, {
		charId: 6,
		charName: 'Maypul',
		source: img6,
		colors: [{
			sectId: 0, sectName: 'Body', vals [{
				
			}],
			sectId: 1, sectName: 'Belly', vals [{
				
			}],
			sectId: 2, sectName: 'Leaf', vals [{
				
			}],
			sectId: 3, sectName: 'Marks', vals [{
				
			}],
			sectId: 4, sectName: 'Vines', vals [{
				
			}],
			sectId: 5, sectName: 'Uneditables', vals [{
				
			}]
		}]
	}, {
		charId: 7
		charName: 'Absa',
		source: img7,
		colors: [{
			sectId: 0, sectName: 'Body', vals [{
	
			}],
			sectId: 1, sectName: 'Hair', vals [{
	
			}],
			sectId: 2, sectName: 'Lightning', vals [{
	
			}],
			sectId: 3, sectName: 'Horns', vals [{
	
			}],
			sectId: 4, sectName: 'Belly', vals [{
	
			}],
			sectId: 5, sectName: 'Uneditables', vals [{
	
			}]
		}]
	}, {
		charId: 8
		charName: 'Etalus',
		source: img8,
		colors: [{
			sectId: 0, sectName: 'Body', vals [{
	
			}],
			sectId: 1, sectName: 'Ice', vals [{
	
			}],
			sectId: 2, sectName: 'Shading', vals [{
	
			}],
			sectId: 3, sectName: 'Uneditables', vals [{
	
			}],
		}]
	}]

	*/

	$scope.images = [{
		id: 0,
		name: 'Link',
		source: img0
	}, {
		id: 1,
		name: 'Zetterburn',
		source: img1
	}, {
		id: 2,
		name: 'Orcane',
		source: img2
	}, {
		id: 3,
		name: 'Kragg',
		source: img3
	}, {
		id: 4,
		name: 'Wrastor',
		source: img4
	}, {
		id: 5,
		name: 'Forsburn',
		source: img5
	}, {
		id: 6,
		name: 'Maypul',
		source: img6
	}, {
		id: 7,
		name: 'Absa',
		source: img7
	}, {
		id: 8,
		name: 'Etalus',
		source: img8
	}];

	$scope.parseInt = parseInt;

	$scope.clear = function($scope) {
		ctx.clearRect(0,0,400,400);
		colorTotal.style.display = "none";
	};

	$scope.drawTest = function(e) {
		$scope.clear();
		ctx.canvas.width = $scope.images[e].source.width;
		ctx.canvas.height = $scope.images[e].source.height;
		ctx.drawImage($scope.images[e].source,0,0);
		$scope.allColors();
	};

	/*$scope.rgbToHsl = function(r, g, b) {
		r = r / 255;
		g = g / 255;
		b = b / 255;
		var max = Math.max(r, g, b);
		var min = Math.min(r, g, b);
		var h;
		var s;
		var v;

		var v = (min + max) / 2;

		var diff = max - min;

		if (diff == 0) {
			s = 0;
			h = 0;
		} else {
			if (v > 0.5) {
				s = diff / (2 - min - max);
			} else {
				s = diff / (max + min);
			}

			switch(max) {
				case r:
					h = (g - b) / diff + (g < b ? 6 : 0);
					break;
				case g:
					h = (g - b) / diff + 2;
					break;
				case b:
					h = (r - g) / diff + 4;
					break;
			}
		}

		return [Math.round(h * 60), Math.round(s * 100), Math.round(v * 100)];
	};*/

	$scope.rgbToHex = function(r, g, b) {
		return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	};

	$scope.rgbToHsl = function(r, g, b) {
		r = r / 255.0;
		g = g / 255.0;
		b = b / 255.0;
		var max = Math.max(r, g, b);
		var min = Math.min(r, g, b);
		var h = 0.0;
		var s = 0.0;
		var l = 0.0;

		var l = (min + max) / 2.0;

		var diff = max - min;

		if (diff > 0.0) {
			if (l > 0.5) {
				s = diff / (2.0 - min - max);
			} else {
				s = diff / (max + min);
			}

			switch(max) {
				case r:
					h = (g - b) / diff + (g < b ? 6.0 : 0);
					//h = ((g - b) / diff) % 6.0;
					break;
				case g:
					h = (b - r) / diff + 2.0;
					break;
				case b:
					h = (r - g) / diff + 4.0;
					break;
			}
		}

		return [Math.round(h * 60.0), Math.round(s * 100.0), Math.round(l * 100.0)];
	};

	$scope.rgbToHsv = function(r, g, b){
		r = r / 255.0;
		g = g / 255.0;
		b = b / 255.0;
		var hh = 0.0;
		var ss = 0.0;
		var vv = 0.0;

		var mMax = Math.max(r, Math.max(g, b));
		var mMin = Math.min(r, Math.min(g, b));

		vv = mMax;

		var dDiff = mMax - mMin;

		if (dDiff > 0.0){
			switch(mMax){
				case r:
					hh = ((g - b) / dDiff) + (g < b ? 6.0 : 0);
					//hh = ((g - b) / dDiff) % 6.0;
					break;
				case g:
					hh = (b - r) / dDiff + 2.0;
					break;
				case b:
					hh = (r - g) / dDiff + 4.0;
					break;
			}
		hh /= 6.0;
		ss = dDiff / vv;
		}
		

		//return [Math.round(hh * 360.0), Math.round(ss * 100.0), Math.round(vv * 100.0)];
		return [hh * 360.0, ss * 100.0, vv * 100.0];
	};

	$scope.colorSelected = 'rgba(0,0,0,1)';

	$scope.colorDefined = 'rgba(0,0,0,1)';

	$scope.rgbVals = {r: 255, g: 0, b: 0, a: 255};
	$scope.hslVals = {h: 0, s: 100, l: 50};
	$scope.hsvVals = {hh: 0, ss: 255, vv: 255};
	$scope.hexVals = "ff0000";

	$scope.allrgbVals = [];

	/*
	$scope.submitVals = function(r, g, b, a) {
		var rgba = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
		var data = [r, g, b, a];
		colorDefined.style.background = rgba;
		colorDefined.style.color = $scope.setTextColor(data[0], data[1], data[2]);
		
		for(var i = 0; i < data.length; i++){
			colorB[i] = parseInt(data[i]);
		}
	};
	*/

	$scope.$on('$routeChangeSuccess', function() {
  		$scope.setGradientAll();
	});

	$scope.colorClick = function($event) {
		var x = event.layerX;
		var y = event.layerY;
		var pixel = ctx.getImageData(x, y, 1, 1);
		var data = pixel.data;
		var rgba = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + data[3] + ')';

		colorSelected.style.background = rgba;
		colorSelected.style.color = $scope.setTextColor(data[0], data[1], data[2]);
		colorSelected.textContent = rgba;
		colorA = data;
		$scope.rgbVals.r = colorA[0];
		$scope.rgbVals.g = colorA[1];
		$scope.rgbVals.b = colorA[2];
		$scope.rgbVals.a = colorA[3];
		$scope.setColorFromRgb();
	};
	
	$scope.colorPick = function($event) {
		var x = event.layerX;
		var y = event.layerY;
		var pixel = ctx.getImageData(x, y, 1, 1);
		var data = pixel.data;
		var rgba = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + data[3] + ')';


		colorHover.style.background = rgba;
		colorHover.style.color = $scope.setTextColor(data[0], data[1], data[2]);
		colorHover.textContent = rgba;
	};

	$scope.replaceColor = function(before, after){
		var cWidth = c.width;
		var cHeight = c.height;
		var canvasData = ctx.getImageData(0,0,cWidth,cHeight);
		pixels = canvasData.data;
		colorB = [$scope.rgbVals.r, $scope.rgbVals.g, $scope.rgbVals.b, $scope.rgbVals.a];
		//colorC = $scope.rgbToHsl(colorB[0], colorB[1], colorB[2]);
		before = colorA;
		after = colorB;

		$scope.setGradientAll();

		for(var i = 0, len = pixels.length; i < len; i += 4){
			if(pixels[i] == before[0] && pixels[i+1] == before[1] && pixels[i+2] == before[2]){
					pixels[i] = after[0];
					pixels[i+1] = after[1];
					pixels[i+2] = after[2];
				}
			}

			colorA = colorB;

			var rgba = 'rgba(' + colorA[0] + ',' + colorA[1] + ',' + colorA[2] + ',' + colorA[3] + ')';
			colorSelected.style.background = rgba;
			colorSelected.style.color = $scope.setTextColor(colorA[0], colorA[1], colorA[2]);
			colorSelected.textContent = rgba;

			ctx.putImageData(canvasData, 0, 0);
			$scope.allColors();
			colorDefined.style.color = $scope.setTextColor(colorB[0], colorB[1], colorB[2]);
		};

	$scope.allColors = function(){
		var canvasData = ctx.getImageData(0,0,400,400);
		var pixels = canvasData.data;
		var format;
		var colorArray = [];
		console.log("I am running?");

		for (var i = 0; i < pixels.length; i += 4){
			format = [pixels[i], pixels[i+1], pixels[i+2], pixels[i+3]];
			colorArray = $scope.pushUnique(colorArray, format);
		}
		$scope.allrgbVals = colorArray;
		colorTotal.style.display = "block";
		colorMsg.textContent = "There are a total of " + $scope.allrgbVals.length + " colors in this image.";
	};

	$scope.pushUnique = function(clrArr, format){
		//assume we should add the format
		var shouldPush = true;
		var badFormat = [0, 0, 0, 0];

		//check the array of currently found colors
		for(var j = 0; j < clrArr.length; j++) {
			var currentPixel = clrArr[j];
			//compare the current pixel's color values to our input colors
			if (currentPixel[0] === format[0] &&
				currentPixel[1] === format[1] &&
				currentPixel[2] === format[2] &&
				currentPixel[3] === format[3]) {
				shouldPush = false;
			}
		}

		if(format[3] === 0){
			shouldPush = false;
		}

		//if we never found an instance of the pixel in our current array, add it
		if(shouldPush){
			clrArr.push(format);
		}
		//send back the array
		return clrArr;
	};

	$scope.setTextColor = function(r, g, b){

    	var o = Math.round(((parseInt(r) * 299) + (parseInt(g) * 587) + (parseInt(b) * 114)) / 1000);

    	if(o > 75){
    		return 'black';
    	} else {
    		return 'white';
    	}
	};

	$scope.setGradient = function(el, steps){

		var gradientString = "linear-gradient(to right,";

		var stepSize = 100 / (steps.length - 1);

		for(var i = 0; i < steps.length; i++) {
			gradientString += (i > 0 ? "," : "") + steps[i] + (i * stepSize) + "%";
		}
		el.style.backgroundImage = gradientString + ")";
	};

	$scope.setGradientAll = function(){
		$scope.setGradient(rInput, ["rgb(" + 0 + "," + $scope.rgbVals.g + "," + $scope.rgbVals.b +")", "rgb(" + 255 + "," + $scope.rgbVals.g + "," + $scope.rgbVals.b +")"]);
		$scope.setGradient(gInput, ["rgb(" + $scope.rgbVals.r + "," + 0 + "," + $scope.rgbVals.b +")", "rgb(" + $scope.rgbVals.r + "," + 255 + "," + $scope.rgbVals.b +")"]);
		$scope.setGradient(bInput, ["rgb(" + $scope.rgbVals.r + "," + $scope.rgbVals.g + "," + 0 +")", "rgb(" + $scope.rgbVals.r + "," + $scope.rgbVals.g + "," + 255 +")"]);

		$scope.setGradient(hInput, [hsl(0, $scope.hslVals.s, $scope.hslVals.l), hsl(60, $scope.hslVals.s, $scope.hslVals.l), hsl(120, $scope.hslVals.s, $scope.hslVals.l), hsl(180, $scope.hslVals.s, $scope.hslVals.l), hsl(300, $scope.hslVals.s, $scope.hslVals.l), hsl(360, $scope.hslVals.s, $scope.hslVals.l)]);
		$scope.setGradient(sInput, [hsl($scope.hslVals.h, 0, $scope.hslVals.l), hsl($scope.hslVals.h, 100, $scope.hslVals.l)]);
		$scope.setGradient(lInput, [hsl($scope.hslVals.h, $scope.hslVals.s, 0), hsl($scope.hslVals.h, $scope.hslVals.s, 50), hsl($scope.hslVals.h, $scope.hslVals.s, 100)]);
	}

	$scope.setColorFromHsl = function() {
		var temp = $scope.hslToRgb($scope.hslVals.h, $scope.hslVals.s, $scope.hslVals.l);

		$scope.rgbVals.r = temp[0];
		$scope.rgbVals.g = temp[1];
		$scope.rgbVals.b = temp[2];

		var hsvTemp = $scope.rgbToHsv($scope.rgbVals.r, $scope.rgbVals.g, $scope.rgbVals.b);
		$scope.hsvVals.hh = hsvTemp[0];
		$scope.hsvVals.ss = hsvTemp[1];
		$scope.hsvVals.vv = hsvTemp[2];

		$scope.replaceColor(colorA, colorB);
	};

	$scope.setColorFromRgb = function() {

		$scope.hexVals = $scope.rgbToHex($scope.rgbVals.r, $scope.rgbVals.g, $scope.rgbVals.b);

		var temp2 = $scope.rgbToHsl($scope.rgbVals.r, $scope.rgbVals.g, $scope.rgbVals.b);
		
		$scope.hslVals.h = temp2[0];
		$scope.hslVals.s = temp2[1];
		$scope.hslVals.l = temp2[2];

		var hsvTemp2 = $scope.rgbToHsv($scope.rgbVals.r, $scope.rgbVals.g, $scope.rgbVals.b);
		$scope.hsvVals.hh = hsvTemp2[0];
		$scope.hsvVals.ss = hsvTemp2[1];
		$scope.hsvVals.vv = hsvTemp2[2];

		$scope.replaceColor(colorA, colorB);
		
		
	};

	$scope.hslToRgb = function(h, s, l) {
		var m1, m2, r, g, b;

		h = h / 360;
		s = s / 100;
		l = l / 100;

		m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;

		m1 = l * 2 - m2;

		r = $scope.hueToRgb(m1, m2, h + 1/3);
		g = $scope.hueToRgb(m1, m2, h);
		b = $scope.hueToRgb(m1, m2, h - 1/3);

		return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
	};

	$scope.hueToRgb = function(m1,m2, h) {
		if(h < 0){
			h = h + 1;
		} else if (h > 1) {
			h = h -1;
		}

		if(h*6 < 1) {
			return m1 + (m2 - m1) * h * 6;
		} else if (h * 2 < 1){
			return m2;
		} else if (h * 3 < 2){
			return m1 + (m2 - m1) * (2/3 - h) * 6;
		}

		return m1;
	};


	/*

	$scope.pushUnique = function(item){
		var j = 0;
		while(j < $scope.allRGB.length-3) {
			if(item[0] == $scope.allRGB[j] && item[1] == $scope.allRGB[j+1] && item[2] == $scope.allRGB[j+2] && item[3] == $scope.allRGB[j+3]){
				if(j < $scope.allRGB.length-3){
					j += 4;
				} else {
					return false;
				}
			} else {
				console.log("How did I get here");
				$scope.allRGB.push(item[0], item[1], item[2], item[3]);
			}
		}
	};

	$scope.allColors = function(){
		var canvasData = ctx.getImageData(0,0,400,400);
		var pixels = canvasData.data;
		console.log("I am running?");

		for (var i = 0; i < pixels.length-3; i += 4){
			if(pixels[i] != pixels[i-4] || pixels[i+1] != pixels[i-3] || pixels[i+2] != pixels[i-2] || pixels[i+3] != pixels[i-1]){
				$scope.pushUnique([pixels[i], pixels[i+1], pixels[i+2], pixels[i+3]]);
			}
		}
	};
	*/
$scope.setGradientAll();
}]);