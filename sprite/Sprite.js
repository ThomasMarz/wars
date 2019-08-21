class Sprite {

	x;
	y;
	width;
	height;

	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	draw(ctx) {
		throw new Error("not implemented");
	}

	pos(x, y) {
		this.x = x;
		this.y = y;
	}

	offCanvas() {
		return this.x < 0 || this.y < 0 || this.x > Game.canvasWidth || this.y > Game.canvasHeight;
	}

	/**
	 * https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
	 */
	collides(other) {
		return this.x < other.x + other.width &&
			this.x + this.width > other.x &&
			this.y < other.y + other.height &&
			this.y + this.height > other.y;
	}
}