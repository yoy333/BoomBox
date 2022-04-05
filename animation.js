const screen = document.querySelector('#screen');
let height;
let width;
const ctx = screen.getContext('2d');
const sizeScreen = function(){
	height = window.innerHeight;
	width = window.innerWidth;
	screen.height = height;
	screen.width = width;
}
let request;
let run = true;
function frame(time){
	ctx.fillStyle = 'rgb(0,0,0)';
	ctx.fillRect(0, 0, width, height);
	p1.input();
	Player.frame();
	if(run)
		request = requestAnimationFrame(frame);
}
const startAnimation = function(){
	
	request = requestAnimationFrame(frame);
}