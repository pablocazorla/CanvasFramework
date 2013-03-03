//Playground

var myHc = Canvas('myCanvas');



var myRect = Rectangle(-75,-10,150,20);

var circ = Circle(0,0,10).fill('#66D');

var myLay = Layer('capa');

myLay._x= 400;
myLay._y= 480;


var bola = Layer('bola').add(circ);


myHc._canvas.onmousemove = function(ev){
	myLay._x = myHc.mouseX(ev);
}

var velX=6;
var velY=6;
bola._x = bola._y =20;

bola.animate(function(){
	bola._x += velX;
	bola._y += velY;
	
	if(bola._x>790 ||bola._x<10 ){
		velX *= -1;
	}
	if(bola._y<10){
		velY *= -1;
	}
	
	if(bola._y>460){
		var dif = Math.abs(myLay._x - bola._x);
		if(dif<=75){
			velY *= -1;
		}
	}
	
});

myHc.add(myLay.add(myRect)).add(bola).render();