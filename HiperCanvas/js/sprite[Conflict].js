//HiperCanvas -> Sprite

;(function(){
	var Spr = function(arg){
		this.init(type,arg);
	};
	
	Spr.prototype = {
		
		_type : 'shape',
		_points : [[0,0],[100,0],[100,80],[0,80],[0,0]],
		_lines : ['line','line','line','line'],
		_style : {
			
		},
		
		init : function(arg){
			this._type = arg.type;
			this._points = arg.points;
			this._lines = arg.lines;
			this._style = arg.style;
			
			return this;
		}
	};
	
	//Shortcut
	if(!window.Sprite){
		window.Sprite = function(arg){
			return new Spr(arg);
		};
	};	
})();
