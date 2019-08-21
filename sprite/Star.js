"use strict";

class Star extends Sprite {

	static width = 2;
	static height = 2;
	static color = "#aaa";
	static count = 20;
	static speedBase = 1;
	static speedRange = 5;

	constructor() {
		super(Star.width, Star.height);
		this.x = Math.random() * Game.canvasWidth;
		this.y = Math.random() * Game.canvasHeight;
		this.speed = Math.random() * Star.speedRange + Star.speedBase;
	}

	move() {
		this.x -= this.speed;
		if (this.x < 0) {
			this.x = Game.canvasWidth;
			this.y = Math.random() * Game.canvasHeight;
		}
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.fillStyle = Star.color;
		ctx.rect(this.x, this.y, Star.width, Star.height);
		ctx.fill();
		ctx.closePath();
	}
}