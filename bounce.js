// http://billmill.org/static/canvastutorial/index.html

// canvas context holder
var ctx;
var entities = new Array();

// setup stuffs
function init() {
	// get the canvas
	ctx = $('#canvas')[0].getContext('2d');

	entities[0] = new Circle();
	entities[1] = new Entity();
	entities[2] = new Square();

	draw();
}

// draw!
function draw() {
	for (var i = 0; i < entities.length; i++) {
		console.log('draw ' + i);
		entities[i].draw();
	}
}
