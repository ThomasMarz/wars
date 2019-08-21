"use strict";

class GameOver {

	constructor() {
	}

	draw(ctx) {

		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.globalAlpha = 0.5;
		ctx.fillRect(0, 0, Game.canvasWidth, Game.canvasHeight);
		ctx.globalAlpha = 1;

		ctx.beginPath();
		ctx.font = "80px Impact";
		ctx.fillStyle = "white";
		ctx.fillText("Game Over",150,220);
		ctx.closePath();
	}
}