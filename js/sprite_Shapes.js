//Shapes
;(function(){
	//Rectangle
	var Rectangle = function(customDim,customConf){
		var dim = {
			x : 0, y : 0, w : 100, h : 100
		};
		if(customDim) dim = extendObject(dim,customDim);		
		
		var newRectangle = new Sprite(function(c){
			c.beginPath();
			c.moveTo(dim.x,dim.y);
			c.lineTo(dim.x+dim.w,dim.y);
			c.lineTo(dim.x+dim.w,dim.y+dim.h);
			c.lineTo(dim.x,dim.y+dim.h);
			c.lineTo(dim.x,dim.y);
			c.fill();
			c.stroke();
			c.closePath;
		},customConf);
		return newRectangle;
	};
	
	//Shortcut
	if(!window.Rectangle){
		window.Rectangle = Rectangle;
	};	
})();