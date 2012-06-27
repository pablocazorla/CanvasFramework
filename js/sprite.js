//Sprite
;(function(){
	var Sprite = function(obj){
		this.init(obj);
	};
	
	Sprite.prototype = {
			_type : 'sprite',			
			conf : {
				subtype : 'shape',
				x : 0,
				y : 0,
				xscale : 1,
				yscale : 1,
				rotation : 0,
				points : [],
				lines : [],
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
				},
			},
			_visible : true,
			
			init : function(obj){
				this.conf = extend(this.conf,obj);
			}
		
	};	
	
	//Shortcut
	if(!window.Sprite){
		window.Sprite = Sprite;
	};
	
	
})();