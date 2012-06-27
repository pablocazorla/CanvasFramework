//Layer
;(function(){
	var Layer = function(idElement){
		this.init(idElement);
	};
	
	Layer.prototype = {
			_type : 'layer',
			_id : '',
			_canvas : null,
			_visible : true,
			_x : 0,
			_y : 0,
			_xscale : 1,
			_yscale : 1,
			_rotation : 0,
			_sprites : [],
			_length : 0,
			_animationFunction : null,
			_timer : 0,
			
			init : function(arg){
				if(arg == undefined){
					arg = ''+ window.layerIdCounter;
					window.layerIdCounter++;
				};
				this._id = arg;
			},		
			
			id : function(arg){
				if(typeof arg == 'string'){
					this._id = arg;
					return this;
				}else{
					return this.prop.id;
				}
			},
			
			show : function(){
				if(!this._visible){
					this._visible = true;
				}
				return this;
			},
			hide : function(){
				if(this._visible){
					this._visible = false;
				}
				return this;
			},
			translate : function(arg1,arg2){
				this._x = arg1;
				if(arg2==undefined){arg2 = arg1;}
				this._y = arg2;
				return this;
			},
			scale : function(arg1,arg2){
				this._xscale = arg1;
				if(arg2==undefined){arg2 = arg1;}
				this._yscale = arg2;
				return this;
			},
			rotate : function(arg){
				this._rotation = arg;
				return this;
			},
			
			addTo : function(arg){
				if(arg._type=='canvas'){
					arg.addLayer(this);
					this;
				}				
				return this;
			},
			
			addSprite : function(arg){
				if(arg._type == 'sprite'){
					this._sprites.push(arg);
					this._length++;					
					this;
				}
				return this;
			},
			animateFrames : function(arg){
				this._animationFunction = arg;
				return this;
			},
			animate : function(arg,duration,callback){
				
				var times = Math.round(duration/window.frameTime);
				this._timer = 0;
				
				for(var a in arg){
					arg[a] = (arg[a] - this[a]);					
				}
				
				this._animationFunction = function(){
					for(var a in arg){
						this[a] += arg[a]/times;						
					}
					this._timer++;
					if(this._timer >= times){
						this._timer = 0;
						this.stopAnimation();
						if(callback){
							callback();
						}
					}
				}
				return this;
			},
			stopAnimation : function(){
				this._animationFunction = null;
			}
		
		
		
		
		
		
	};	
	
	//Shortcut
	if(!window.Layer){
		window.Layer = Layer;
	};	
})();