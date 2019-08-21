/**
 * From: https://www.w3schools.com/graphics/tryit.asp?filename=trygame_sound
 */
class Sound {

	constructor(src) {
		this._sound = document.createElement("audio");
		this._sound.src = "audio/" + src + ".mp3";
		this._sound.setAttribute("preload", "auto");
		this._sound.setAttribute("controls", "none");
		this._sound.style.display = "none";
		document.body.appendChild(this._sound);
	}

	play (){
		this._sound.play();
	};

	pause (){
		this._sound.pause();
	};
}