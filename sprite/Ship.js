"use strict";

class Ship extends Sprite {

	static color = "#836FFF";
	static width = 50;
	static height = 30;
	static speed = 20;

	constructor() {
		super(Ship.width, Ship.height);
	}

	move(sDir) {
		if ("r" === sDir && this.x < Game.canvasWidth - Ship.width) {
			this.x += Ship.speed;
		} else if ("l" === sDir && this.x > 0) {
			this.x -= Ship.speed;
		} else if ("d" === sDir && this.y < Game.canvasHeight - Ship.height) {
			this.y += Ship.speed;
		} else if ("u" === sDir && this.y > 0) {
			this.y -= Ship.speed;
		}
		if (this.x > Game.canvasWidth - Ship.width) {
			this.x = Game.canvasWidth - Ship.width;
		}
		if (this.x < 0) {
			this.x = 0;
		}
		if (this.y > Game.canvasHeight - Ship.height) {
			this.y = Game.canvasHeight - Ship.height;
		}
		if (this.y < 0) {
			this.y = 0;
		}

		console.info ("Ship.move: " + sDir);
	}

	draw(ctx) {

		/*
		ctx.beginPath();
		ctx.rect(this.x, this.y, 40, 20);
		ctx.fill();
		ctx.closePath();
		*/

		ctx.beginPath();
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x + this.width, this.y + this.height / 2);
		ctx.lineTo(this.x, this.y + this.height);
		ctx.fillStyle = Ship.color;
		ctx.fill();

		ctx.beginPath();
		ctx.arc(this.x + this.width * 3/5, this.y + this.height * 1/3, this.height * 1/5, 0, 2 * Math.PI);
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