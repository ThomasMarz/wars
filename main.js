"use strict";

var ellapsedMillis;
var attackerAddedMillis;
var ctx, canvas;
var ship, gameOver;
var stars = [];
var lasers = [];
var attackers = [];
var explosions = [];
var bullets = [];
var gameOverFlag;
var sound = {};

function init () {

	sound.ready = new Sound("getReady");
	sound.laser = new Sound("laser");
	sound.explosion = new Sound("explosion");
	sound.pui = new Sound("pui");
	sound.gameOver = new Sound("gameOver");

	sound.ready.play();

	document.addEventListener("keydown", keydown, false);

	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");

	ship = new Ship();
	ship.pos(10, 200);

	gameOver = new GameOver();

	for (var i = 0; i < Star.count; i++) {
		stars.push(new Star());
	}

	attackerAddedMillis = 0;
	ellapsedMillis = 0;

	setInterval(update, Game.updateInterval);
}


function update () {

	if (gameOverFlag) {
		return;
	}

	// add attacker
	let bAddCylon = ellapsedMillis === 0 || attackerAddedMillis + 2000 < ellapsedMillis;
	if (bAddCylon ) {
		let y = Math.random() * (Game.canvasHeight - 100);
		var cylon = new Cylon(50 + y);
		attackers.push(cylon);
		attackerAddedMillis = ellapsedMillis;
	}

	// move things
	var i, j;
	for (i = 0 ; i < stars.length ; i++) {
		stars[i].move();
	}
	for (i = 0 ; i < lasers.length ; i++) {
		lasers[i].move();
	}
	for (i = 0 ; i < attackers.length ; i++) {
		attackers[i].move();
	}
	for (i = 0 ; i < bullets.length ; i++) {
		bullets[i].move();
	}

	// attacker collision?
	for (i = 0 ; i < attackers.length ; i++) {
		if (attackers[i].collides(ship)) {
			gameOverFlag = true;
			sound.gameOver.play();
		}
	}

	// bullet collision?
	for (i = 0 ; i < bullets.length ; i++) {
		if (bullets[i].collides(ship)) {
			gameOverFlag = true;
			sound.gameOver.play();
		}
	}

	// attacker killed?
	for (i = 0 ; i < attackers.length ; i++) {
		for (j = 0 ; j < lasers.length ; j++) {
			if (attackers[i].collides(lasers[j])) {

				var e = new Explosion();
				e.pos(attackers[i].x, attackers[i].y);
				explosions.push(e);
				sound.explosion.pause();
				sound.explosion.play();

				attackers.splice(i, 1);
				lasers.splice(j, 1);

				//ship.width = ship.width * 1.1;
				//ship.height = ship.height * 1.1;
			}
		}
	}

	// remove explosion
	for (i = 0 ; i < explosions.length ; i++) {
		if (explosions[i].finished) {
			explosions.splice(i, 1);
		}
	}

	// attacker shoots bullet
	for (i = 0 ; i < attackers.length ; i++) {
		if (Math.random() > 0.997) {
			let att = attackers[i];
			let bullet = new Bullet(att, ship);
			bullets.push(bullet);
			sound.pui.play();
		}
	}

	drawAll();

	ellapsedMillis += Game.updateInterval;
}

function drawAll () {

	if (gameOverFlag) {
		gameOver.draw(ctx);
		return;
	}

	ctx.clearRect(0,0,canvas.width, canvas.height);

	var i;
	for (i = 0 ; i < stars.length ; i++) {
		stars[i].draw(ctx);
	}
	for (i = 0 ; i < lasers.length ; i++) {
		lasers[i].draw(ctx);
	}
	for (i = 0 ; i < bullets.length ; i++) {
		bullets[i].draw(ctx);
	}
	for (i = 0 ; i < attackers.length ; i++) {
		attackers[i].draw(ctx);
	}
	for (i = 0 ; i < explosions.length ; i++) {
		explosions[i].draw(ctx);
	}
	ship.draw(ctx);
}

function keydown(event) {
	let code = event.keyCode;
	let m = {
		38: "u",
		40: "d",
		37: "l",
		39: "r"
	};
	let sDir = m[code];
	if (sDir) {
		ship.move(sDir);
	}

	if (code=== 32) {
		var l = new Laser(ship.x + 42, ship.y + Ship.height / 2 - 1);
		lasers.push(l);
		sound.laser.play();
	}
}

$(document).ready(init);
