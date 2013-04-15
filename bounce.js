// canvas context holder
var ctx;

function init() {
	// get the canvas
	ctx = $('#canvas')[0].getContext('2d');

	draw();

	alert('init');
}

function draw() {
	// draw circle
	ctx.beginPath();
	ctx.arc(75, 75 , 10, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
}


