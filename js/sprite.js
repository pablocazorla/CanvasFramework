//Sprite
;(function(){
	var Sprite = function(customConf,draw){
		this.init(customConf,draw);
	};
	
	Sprite.prototype = {
		type : 'sprite',			
		init : function(customConf,draw){
			this.conf = {				
				style : {
					fillStyle: '#AAA',
					font: '10px sans-serif',
					globalAlpha: 1,
					globalCompositeOperation: 'source-over',
					lineCap: 'butt',
					lineJoin: 'miter',
					lineWidth: 1,
					miterLimit: 10,
					textAlign: 'start',
					textBaseline: 'alphabetic',
					shadowBlur: 0,
					shadowColor: 'rgba(0, 0, 0, 0)',
					shadowOffsetX: 0,
					shadowOffsetY: 0,
					strokeStyle: '#000'
				}
			};
			this.conf = extendObject(this.conf,customConf);
			this.visible = true;
			this.draw = draw;
		}
		//End Sprite
	};	
	
	//Shortcut
	if(!window.Sprite){
		window.Sprite = Sprite;
	};
	
	
})();