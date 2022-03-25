const screen = document.querySelector('#screen');
let height;
let width;
const ctx = screen.getContext('2d');
const sizeScreen = (function(){
	height = window.innerHeight;
	width = window.innerWidth;
	screen.height = height;
	screen.width = width;
})()

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0, 0, width, height);