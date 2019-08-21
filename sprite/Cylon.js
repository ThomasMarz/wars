"use strict";

class Cylon extends Sprite {

	static width = 45;
	static height = 40;
	static color = "#13eb4c";
	static speed = 20;

	constructor(base) {
		super(Cylon.width, Cylon.height);
		this.pi = 0;
		this.x = Game.canvasWidth;
		this.base = base;
	}

	move() {
		this.pi += 1;
		this.pos(this.x - 2, this.base + 50 * Math.sin((this.pi / 70) * Math.PI * 2));
	}

	draw(ctx) {

		/*
		ctx.beginPath();
		ctx.rect(this.x, this.y, 40, 20);
		ctx.fill();
		ctx.closePath();
		*/

		ctx.fillStyle = Cylon.color;

		ctx.beginPath();
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x + 30, this.y);
		ctx.lineTo(this.x, this.y + 15);
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(this.x, this.y + 25);
		ctx.lineTo(this.x + 30, this.y + 40);
		ctx.lineTo(this.x, this.y + 40);
		ctx.fill();

		ctx.beginPath();
		ctx.arc(this.x + 25, this.y + 20, 20, Math.PI*1.5 , Math.PI* 2.5);
		ctx.fill();
		ctx.closePath();

		ctx.fillStyle = "#d10000";
		ctx.beginPath();
		ctx.arc(this.x + 30, this.y + 20, 10, 0 , Math.PI* 2);
		ctx.fill();
		ctx.closePath();

		/*
		// Antenne zeichnen
		ctx.beginPath();
		ctx.moveTo(x+8,y+12);
		ctx.lineTo(x+18,y+18);
		ctx.lineWidth = 1;
		ctx.strokeStyle = "black";
		ctx.stroke() ;
		ctx.closePath();

		//Reifen bauen
		ctx.beginPath();
		ctx.arc(x+35,y+40,6,0,2*Math.PI);
		ctx.fillStyle = "red";
		ctx.fill();
		ctx.closePath();
		*/
	}
}