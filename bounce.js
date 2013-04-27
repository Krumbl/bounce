// http://billmill.org/static/canvastutorial/index.html

// canvas context holder
var ctx;
var entities = new Array();

function init() {
	// get the canvas
	ctx = $('#canvas')[0].getContext('2d');

	entities[0] = new Circle();
	entities[1] = new Entity();

	draw();
}


// assuming are circles for now
function Entity () {
	// var are private
	var point = new Point2d(50,50);
	var color = "F00";

	// this are public
	this.getPoint = function() {return point;};
}
// this function can't access point
Entity.prototype.getPointProto = function() {
	return this.point;
//	return new Point2d(100,100);
}
Entity.prototype.draw = function() {
	if (ctx != null) {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.moveTo(this.getPoint().x - 20, this.getPoint().y - 20);
		ctx.lineTo(this.getPoint().x + 20, this.getPoint().y + 20);
		ctx.moveTo(this.getPoint().x + 20, this.getPoint().y - 20);
		ctx.lineTo(this.getPoint().x - 20, this.getPoint().y + 20);
		ctx.stroke();
		ctx.closePath();
	}
}

function Circle(){}
Circle.prototype = new Entity();
Circle.prototype.draw = function() {
	ctx.beginPath();
	ctx.fillStyle = this.color;
	ctx.arc(this.getPoint().x, this.getPoint().y, 10, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
}

function Square(){}
Square.prototype = new Entity();
Square.prototype.draw = function() {
	ctx.beginPath();
	ctx.fillStyle = this.color;
	ctx.fillRect(this.getPoint().x, this.getPoint().y, 25, 25);
	ctx.closePath();
}

function Point2d(x, y) {
	this.x = x;
	this.y = y;
}

function draw() {
	for (var i = 0; i < entities.length; i++) {
		console.log('draw ' + i);
		entities[i].draw();
	}
}
