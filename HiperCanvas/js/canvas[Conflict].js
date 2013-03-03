//Canvas

;(function(){
	var Can = function(idNodeElement){
		this.init(idNodeElement);
	};
	
	Can.prototype = {		
		init : function(arg){
			if(arg === undefined){
				this._id = 'none';
				this._canvas = document.getElementsByTagName('canvas')[0];
			}else{
				this._id = arg;
				this._canvas = document.getElementById(arg);
			}
			this._c = this._canvas.getContext('2d');
			this._layers = [];
			this._length = 0;
			return this;
		},
		add : function(layer){
			this._layers.push(layer);
			this._length++;
			return this;
		},
		render : function(){
			var obj = this,
				renderInterval = setInterval(function(){
					for(var i = 0;i < obj._length;i++){
						
						//Get Layer
						var layer = obj._layers[i];
						if(layer._visible){
							console.log(layer)
							// Revert to the default coordinate system
							obj._c.setTransform(1,0,0,1,0,0);
							
							//Position of layer
							obj._c.translate(layer._x,layer._y);
							obj._c.scale(layer._xscale,layer._yscale);
							obj._c.rotate(layer._rotation*Math.PI/180);
							
							//Draw Layer
							for(var ie = 0; ie < layer._length;ie++){
								
								//Get Sprite
								var sprite = layer._sprites[ie];
								
								//Save default context
								obj._c.save();
								
								//Get current context
								for(var a in sprite.conf.style){
									this._c[a] = sprite._style[a];								
								};
								
								switch(sprite._type){
									case 'shape':
										obj._c.beginPath();
										obj._c.moveTo(sprite.points[0][0], sprite.points[0][1]);
										for(var iee = 0;iee < sprite.lines.length;iee++){
											switch(sprite.lines[iee]){
												case 'line':
													obj._c.lineTo(sprite.points[iee+1][0], sprite.points[iee+1][1]);
													 
													break;
												case 'arc':
													//
													break;
												default:
													//
											}
										}
										obj._c.fill();
										obj._c.stroke();
										obj._c.closePath();
										
										break;
									case 'text':
										//
										break;
									default:
										//   							
								}	
							}
							obj._c.restore();
						}
					}
				},20);
			return this;
		}
	};
	
	//Shortcut
	if(!window.Canvas){
		window.Canvas = function(idNodeElement){
			return new Can(idNodeElement);
		};
	};	
	
	
})();
