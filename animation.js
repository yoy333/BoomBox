const screen = document.querySelector('#screen');
let height;
let width;
const ctx = screen.getContext('2d');
const sizeScreen = function() {
	height = window.innerHeight;
	width = window.innerWidth;
	screen.height = height;
	screen.width = width;
}

const startAnimation = function(){
	let start = Date.now();
	let end = Date.now();
	function frame(time){
		console.log(time)
		ctx.fillStyle = 'rgb(0,0,0)';
		ctx.fillRect(0, 0, width, height);	
		Player.drawEveryone();
		end = Date.now();
		requestAnimationFrame(frame);
	}
	requestAnimationFrame(frame);
}