function Engine() {
	// canvas context holder
	this.ctx;
	this.entities = new Array();
	this.start = new Date();
	this.delta = 0;
}

// setup stuffs
Engine.prototype.init = function() {
	// get the canvas
	ctx = $('#canvas')[0].getContext('2d');

	this.entities[0] = new Circle();
	this.entities[1] = new Entity();
	this.entities[2] = new Square();

	this.last = Date.now();
}

// look into requestAnimFrame
Engine.prototype.loop = function() {
	var current = Date.now();
	var delta = current - this.last;
	console.log('delta: ' + delta);
	var _this = this;
	if (delta < 1000) {
		setTimeout(function() {_this.loop();}, 1000 - delta);
		return;
	}
	//start = new Date();
	
	//setTimeout(loop, (1000/30) - (new Date() - start);	
	this.update(delta);
	this.draw();

	this.last = current;

	this.loop();
}

// draw!
Engine.prototype.draw = function() {
	for (var i = 0; i < this.entities.length; i++) {
		this.entities[i].draw();
	}
}
Engine.prototype.update = function(delta) {
	for (var i = 0; i < this.entities.length; i++) {
		this.entities[i].update(delta);
	}
}
