//App
var myCanvas = new Canvas('myCanvas'),
	myLayer = new Layer(),
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
	});

myLayer.add(mySprite);
myCanvas.add(myLayer);

myCanvas.render();


