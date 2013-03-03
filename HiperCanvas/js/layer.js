//Layer

;(function(){
	var Lay = function(id){
		this.init(id);
	};
	
	Lay.prototype = {
		reset : function(){
			this._id = 'none';
			this._canvas = null;
			this._sprites = [];
			this._length = 0;
			this._x = 0;
			this._y = 0;
			this._xscale = 1;
			this._yscale = 1;
			this._rotation = 0;
			this._visible = true;
			this._animateFunction = undefined;
		},	
		init : function(arg){
			this.reset();
			if(arg != undefined){
				this._id = arg;
			};		
			return this;
		},
		add : function(sprite){
			this._sprites.push(sprite);
			this._length++;
			return this;
		},
		animate : function(callAnimate){
			this._animateFunction = callAnimate;
			return this;
		},
		stopAnimate : function(){
			this._animateFunction = undefined;
			return this;
		},
		hide : function(){
			this._visible = false;
			return this;
		},
		show : function(){
			this._visible = true;
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
