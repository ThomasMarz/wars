"use strict";

class Explosion extends Sprite {

	static size = 80;

	constructor() {
		super(Explosion.size, Explosion.size);
		this.tick = 0;
	}

	draw(ctx) {

		this.tick++;
		let myAlpha = 1 - 0.02 * this.tick;
		if (myAlpha < 0) {
			myAlpha = 0;
			this.finished = true;
		}

		ctx.beginPath();
		ctx.fillStyle = "#eb6123";
		ctx.globalAlpha = myAlpha;
		let radius = (Explosion.size / 2) * myAlpha;
		ctx.arc(this.x + radius, this.y + radius, radius, 0, 2 * Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.globalAlpha = 1;
	}
}