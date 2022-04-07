const keys = {};
// [x, y]
const mouse = [17, 17]
window.addEventListener('keydown', (e)=>{
	keys[e.key] = true;
})

window.addEventListener('keyup', (e)=>{
	keys[e.key] = false;
})

window.addEventListener('click', e => {
	mouse[0] = e.x;
	mouse[1] = e.y;
})