//App
var myCanvas = new Canvas('myCanvas');

var myRect = new Sprite(rectangle(15,15));

var myLay = new Layer('myLay');

myLay.addSprite(myRect).translate(150,250)
.animate({
	
		_x : 500,
		_y : 400,
		_xscale : 4,
		_yscale : 4,
		_rotation : 2
		
	},4000,function(){
		
		k('HOLA');
		
});

myCanvas.addLayer(myLay);

