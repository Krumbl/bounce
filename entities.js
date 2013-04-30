// define our available objects

// the base object
function Entity () {
	// var are private
	var point = new Point2d(50,50);
	var color = "F00";
	// z-index layer
	var z = 0;

	// this are public
	this.getColor = function() {return color;};
	this.setColor = function(color) {this.color = color;};
	this.getPoint = function() {return point;};
	this.setPoint = function(point) {this.point = point;};
}
// this function can't access point
Entity.prototype.getPointProto = function() {
	return this.point;
//	return new Point2d(100,100);
}
// default Entity draws an X
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
Entity.prototype.update = function(delta) {
	if (delta) {
		this.getPoint().x = this.getPoint().x + delta / 100;
		this.getPoint().y = this.getPoint().y + delta / 100;
	}
}

// It's a circle
function Circle(){
	this.setColor('F00');
}
Circle.prototype = new Entity();
Circle.prototype.draw = function() {
	ctx.beginPath();
	ctx.fillStyle = this.color;
	ctx.arc(this.getPoint().x, this.getPoint().y, 10, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
}

// and a square
function Square(){
	this.setColor('0F0');
}
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
