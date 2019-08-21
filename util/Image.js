/**
 * From: https://www.w3schools.com/graphics/tryit.asp?filename=trygame_sound
 */
class Sound {

	constructor(src, w, h) {
		this._img = document.createElement("img");
		this._img.src = "img/" + src;
		this._img.setAttribute("width", w);
		this._img.setAttribute("height", h);
		document.body.appendChild(this._img);
	}
}