"use strict";

class Bullet extends Sprite {

	static size = 10;
	static speed = 4;

	constructor(from, to) {
		super(Bullet.size, Bullet.size);

		this.x = from.x;
		this.y = from.y + from.height / 2;

		let toX = to.x + to.width / 2;
		let toY = to.y + to.width / 2;

		let distanceX = to.x - this.x;
		let distanceY = to.y - this.y;

		let stepCount = Math.abs(distanceX) / Bullet.speed;
		this.dy = distanceY / stepCount;
	}

	move() {
		this.x -= Bullet.speed;
		this.y += this.dy;
	}

	draw(ctx) {

		ctx.beginPath();
		ctx.fillStyle = "#d10000";
		let radius = Bullet.size / 2;
		ctx.arc(this.x + radius, this.y + radius, radius, 0, 2 * Math.PI);
		ctx.fill();
		ctx.closePath();
	}
}