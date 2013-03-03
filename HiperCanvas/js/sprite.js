//HiperCanvas -> Sprite

;(function(){
	var Spr = function(arg){
		this.init(arg);
	};
	
	Spr.prototype = {
		
		reset : function(){
			this._type = 'shape';
			this._points = [[0,0],[100,0],[100,80],[0,80],[0,0]];
			this._lines = ['line','line','line','line'];
			this._style = {
				fillStyle: '#DDD',
				font: '10px sans-serif',
				globalAlpha: 1,
				globalCompositeOperation: 'source-over',
				lineCap: 'butt',
				lineJoin: 'miter',
				lineWidth: 2,
				miterLimit: 10,
				textAlign: 'start',
				textBaseline: 'alphabetic',
				shadowBlur: 0,
				shadowColor: 'rgba(0, 0, 0, 0)',
				shadowOffsetX: 0,
				shadowOffsetY: 0,
				strokeStyle: '#000'
			};
			this._x = 0;
			this._y = 0;
		},		
		
		init : function(arg){
			this.reset();
			this._type = arg.type;
			this._points = arg.points;
			this._lines = arg.lines;
		//	this._style = arg.style;
			
			return this;
		},
		fill : function(arg){
			this._style.fillStyle = arg;
			return this;
		}
	};
	
	//Shortcut
	if(!window.Sprite){
		window.Sprite = function(arg){
			return new Spr(arg);
		};
		window.Rectangle = function(x,y,w,h){
			return new Spr({
				type : 'shape',
				points : [[x,y],[x+w,y],[x+w,y+h],[x,y+h],[x,y]],
				lines : ['line','line','line','line']
			});
		};
		window.Square = function(w,x,y){
			return new Spr({
				type : 'shape',
				points : [[x,y],[x+w,y],[x+w,y+w],[x,y+w],[x,y]],
				lines : ['line','line','line','line']
			});
		};
		window.Polygon = function(faces,radius,x,y){
			var pts = [];
			var lns = [];
			var difAngle =	2*Math.PI/faces;
			var angle = Math.PI/-2;
				
			for(var i=0;i<faces;i++){
				pts.push([radius*Math.cos(angle)+x,radius*Math.sin(angle)+y]);
				angle += difAngle;
				lns.push('line');
			};
			pts.push([radius*Math.cos(angle)+x,radius*Math.sin(angle)+y]);
			
			return new Spr({
				type : 'shape',
				points : pts,
				lines : lns
			});
		};
		window.Circle = function(x, y,radius){			
			return new Spr({
				type : 'shape',
				points : [[x,y],[x,y,radius, 0,2*Math.PI]],
				lines : ['arc']
			});
		}
	};	
})();
