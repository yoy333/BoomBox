const Player = function(){
	this.color = 'rgb(255, 0, 0)';
	this.x = 13;
	this.y = 13;
	this.width = 25;
	this.height = 25;
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
	const dX = x-this.x;
	const dY = y-this.y;
	const h = Math.sqrt(dX**2+dY**2)
	const scale = h/this.speed;
	if(Math.abs(x-this.x)>this.speed){
		this.x += dX/scale;
	}else
		this.x = x;
	if(Math.abs(y-this.y)>this.speed)
		this.y += dY/scale;
	else
		this.y = y;
}

const p1 = new Player();

p1.input = function(){
	this.move(mouse[0], mouse[1]);
}