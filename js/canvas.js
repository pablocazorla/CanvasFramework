//Canvas
;(function(){
	var Canvas = function(idNodeElement){
		this.init(idNodeElement);
	};
	
	Canvas.prototype = {
		_type : 'canvas',
		_id : null,
		_canvas : null,
		_c : null,
		_width : 0,
		_height : 0,
		_layers : [],
		_length : 0,
		
		init : function(arg){
			if(arg === undefined){
				this._canvas = document.getElementsByTagName('canvas')[0];
			}else{
				this._id = arg;
				this._canvas = document.getElementById(arg);
			}
			this._c = this._canvas.getContext('2d');
			this._width = this.width();
			this._height = this.height();
			this._layers = [];
			this._length = 0;
			window.actionFrames.push(this);
			return this;
		},
		
		createLayer : function(arg){
			var newLayer = new Layer(arg);
			this.addLayer(newLayer);
			return newLayer;
		},
		addLayer : function(arg){
			if(arg._type == 'layer'){
				var notAdd = true;
				for(var i = 0;i < this._length;i++){
					if(this._layers[i]._id == arg._id){
						notAdd = false;
					};
				};
				if(notAdd){
					this._layers.push(arg);
					this._length++;
					arg._canvas = this;
				}
			};
			return this;
		},
		showLayer : function(arg){
			this.getLayer(arg).show();
			return this;
		},
		hideLayer : function(arg){
			this.getLayer(arg).hide();
			return this;
		},
		
		
		
		getLayer : function(arg){
			var layer;
			if(typeof arg == 'string'){
				for(var i=0;i < this.length;i++){
					if(this._layers[i]._id == arg){
						layer = this._layers[i];
					};
				}
			}
			return layer;			
		},
		
		render : function(){
			// Revert to the default coordinate system
			this._c.setTransform(1,0,0,1,0,0);
			this.clear();			
			for(var i = 0;i < this._length;i++){
				var layer = this._layers[i];
				if(layer._visible){
					// Revert to the default coordinate system
					this._c.setTransform(1,0,0,1,0,0);
					this._c.translate(layer._x,layer._y);
					this._c.scale(layer._xscale,layer._yscale);
					this._c.rotate(layer._rotation*Math.PI/180);
					
					for(var ie = 0; ie < layer._length;ie++){
						var sprite = layer._sprites[ie];
						this._c.save();
						for(var a in sprite.conf.style){
							this._c[a] = sprite.conf.style[a];
							
						};
						
						switch(sprite.conf.subtype){
							case 'shape':
								this._c.beginPath();
								this._c.moveTo(sprite.conf.points[0][0], sprite.conf.points[0][1]);
								for(var iee = 0;iee < sprite.conf.lines.length;iee++){
									switch(sprite.conf.lines[iee]){
										case 'line':
											this._c.lineTo(sprite.conf.points[iee+1][0], sprite.conf.points[iee+1][1]);
											 
											break;
										case 'arc':
											//
											break;
										default:
											//
									}
								}
								this._c.fill();
								this._c.stroke();
								this._c.closePath();
								
								break;
							case 'text':
								//
								break;
							default:
								//   							
						}					
					}	
					this._c.restore();					
				};
			};
			return this;
		},
		clear : function(){
			this._c.clearRect(0,0,this._canvas.width,this._canvas.height);
			
			return this;
		},
		
		animation : function(){
			for(var i = 0;i < this._length;i++){
				if(typeof this._layers[i]._animationFunction == 'function'){
					this._layers[i]._animationFunction();
				}
			};
			return this;
		},
		
		width : function(arg){
			if(arg != undefined){ //Set width
				this._canvas.style.width = arg;
				this._width	= parseInt(arg);	
				return this;
			}else{//Get width
				var compStyle = window.getComputedStyle (this._canvas, "");
				var resultStyle = compStyle['width'];
				return parseInt(resultStyle);
			}
		},
		height : function(arg){
			if(arg != undefined){ //Set height
				this._canvas.style.height = arg;
				this._height = parseInt(arg);			
				return this;
			}else{//Get height
				var compStyle = window.getComputedStyle (this._canvas, "");
				var resultStyle = compStyle['height'];
				return parseInt(resultStyle);
			}
		}
		
		
		
		
		
	};	
	
	//Shortcut
	if(!window.Canvas){
		window.Canvas = Canvas;
	};	
})();
