var k = function(arg){
	console.log(arg);
}
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
			this._dimensions = this._canvas.getBoundingClientRect();
			this._layers = [];
			this._length = 0;
			return this;
		},
		add : function(layer){
			this._layers.push(layer);
			this._length++;
			layer.Canvas = this;
			return this;
		},
		dimensions : function(){
			return this._canvas.getBoundingClientRect();
		},
		mouseX : function(event){			
			// Convert mouse event coordinates to canvas coordinates
			return Math.round((event.clientX-this.dimensions().left) * (this._canvas.width/this.dimensions().width));
		},
		mouseY : function(event){			
			// Convert mouse event coordinates to canvas coordinates
			return Math.round((event.clientY-this.dimensions().top) * (this._canvas.height/this.dimensions().height));
		},
		render : function(){
			
			var obj = this;
				renderInterval = setInterval(function(){
					obj._c.setTransform(1,0,0,1,0,0);
					obj._c.clearRect(0,0,800,500);
					for(var i = 0;i < obj._length;i++){
						// Revert to the default coordinate system
					obj._c.setTransform(1,0,0,1,0,0);
						//Get Layer
						var layer = obj._layers[i];						
						if(layer._visible){
							//Get Animation
							if(layer._animateFunction != undefined){
								layer._animateFunction();
							};							
							
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
								
								for(var a in sprite._style){									
									obj._c[a] = sprite._style[a];								
								};
								
								switch(sprite._type){
									case 'shape':
										obj._c.beginPath();
										obj._c.moveTo(sprite._points[0][0], sprite._points[0][1]);
										for(var iee = 0;iee < sprite._lines.length;iee++){
											switch(sprite._lines[iee]){
												case 'line':
													obj._c.lineTo(sprite._points[iee+1][0], sprite._points[iee+1][1]);
													 
													break;
												case 'arc':
													obj._c.arc(sprite._points[iee+1][0], sprite._points[iee+1][1], sprite._points[iee+1][2], sprite._points[iee+1][3], sprite._points[iee+1][4], sprite._points[iee+1][5], false);
													break;
												default:
													//
											}
										}
										obj._c.closePath();
										obj._c.fill();
										obj._c.stroke();
										
										
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
