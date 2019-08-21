"use strict";

class Laser extends Sprite {

	static width = 20;
	static height = 4;
	static color = "#d100c7";
	static speed = 10;

	constructor(x,y) {
		super(Laser.width, Laser.height);
		this.x = x;
		this.y = y;
	}

	move() {
		this.x += Laser.speed;
		if (this.x > Game.canvasWidth) {
			this.expired = true;
		}
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.fillStyle = Laser.color;
		ctx.rect(this.x, this.y, Laser.width, Laser.height);
		ctx.fill();
		ctx.closePath();
	}
}