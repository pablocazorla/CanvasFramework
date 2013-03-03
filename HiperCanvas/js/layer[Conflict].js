//Layer

;(function(){
	var Lay = function(id){
		this.init(id);
	};
	
	Lay.prototype = {		
		init : function(arg){
			if(arg === undefined){
				this._id = 'none';
			}else{
				this._id = arg;
			};			
			this._sprites = [];
			this._length = 0;
			this._x = 0;
			this._y = 0;
			this._xscale = 1;
			this._yscale = 1;
			this._rotation = 0;
			return this;
		},
		add : function(sprite){
			this._sprites.push(sprite);
			this._length++;
			return this;
		}
	};
	
	//Shortcut
	if(!window.Layer){
		window.Layer = function(idNodeElement){
			return new Lay(idNodeElement);
		};
	};	
})();
