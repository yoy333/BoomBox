const Player = function(){
	this.color = 'rgb(255, 0, 0)';
	this.x = 18;
	this.y = 18;
	this.width = 35;
	this.height = 35;
	this.speed = 5;
	Player.everyone.push(this);
}

Player.everyone = [];

Player.frame = function(){
	for(let p of Player.everyone){
		//p.move();
	}
	Player.drawEveryone();
}

Player.drawEveryone = function(){
	for(let p of Player.everyone){
		p.draw();
	}
}

Player.prototype.draw = function(){
	ctx.fillStyle = this.color;
	ctx.fillRect(this.left, this.top, this.width, this.height);
}

Object.defineProperty(Player.prototype, 'left', {
	get(){return this.x-(~~(this.width/2+0.5))}
})

Object.defineProperty(Player.prototype, 'top', {
	get(){return this.y-(~~(this.height/2+0.5))}
})

Player.prototype.move = function(x, y){
	const moveOnAxis = (at, to) => {
		const beyondSpeed = Math.abs(to-at)>this.speed;
		console.log(beyondSpeed);
		if(beyondSpeed){
			at += Math.sign(to-at)*this.speed;
		}else{
			at = to;
		}
		return at;
	}
	console.log("x");
	this.x = moveOnAxis(this.x, x);
	console.log("y");
	this.y = moveOnAxis(this.y, y);
}

const p1 = new Player();

p1.input = function(){
	this.move(mouse[0], mouse[1]);
}