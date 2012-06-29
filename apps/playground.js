//App
var myCanvas = new Canvas('myCanvas'),
	myLayer = new Layer('pablito'),
	mySprite = new Sprite(function(c){
		c.beginPath();
		c.moveTo(10,10);
		c.lineTo(100,80);
		c.lineTo(10,140);
		c.lineTo(10,10);
		c.fill();
		c.stroke();
		c.closePath;
	},{
		style : {
			fillStyle : 'red'
		}
	}),
	myRec = Rectangle({x : -5,y:-5,w:10,h:10});

myLayer.add(myRec);
myCanvas.add(myLayer);

myCanvas.render();

var dirX = 1,dirY = 1,vel = 10;
myLayer.x = myLayer.y = 20;
myLayer.animate(function(){	
	this.x += dirX*vel;
	this.y += dirY*vel;
	if(this.x <= 5 || this.x >= 795){
		dirX *= -1;
	}
	if(this.y <= 5 || this.y >= 545){
		dirY *= -1;
	}
});