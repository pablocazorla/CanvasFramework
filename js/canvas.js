//Canvas
;(function(){
	var Canvas = function(idNodeElement){
		this.init(idNodeElement);
	};
	
	Canvas.prototype = {
		type : 'canvas',
			
		init : function(arg){
			if(!arg){
				this.id = null;
				this._canvas = document.getElementsByTagName('canvas')[0];
			}else{
				this.id = arg;
				this.canvas = document.getElementById(arg);
			}
			this.c = this.canvas.getContext('2d');
			this.layers = [];
			this.currentLayer = 0;
			this.length = 0;
			this.visible = true;
			return this;
		},
		
		createLayer : function(arg){
			var newLayer = new Layer(arg);
			this.add(newLayer);
			return newLayer;
		},
		add : function(arg){
			if(arg.type == 'layer' && !arg.added){				
				arg.added = true;
				arg.canvas = this;
				this.layers.push(arg);
				this.currentLayer = this.length;
				this.length++;
				
			}else if(arg.type == 'sprite'){
				if(this.length==0){
					this.createLayer().add(arg);
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
			if(this.length>0){
				if(arg != undefined && arg >= 0 && arg < this.length){	
					return this.layers[arg];		
				}else{
					return this.layers[this.currentLayer];
				}
			}else{
				return this.createLayer()
			}
		},
		
		
		clear : function(){
			this.c.clearRect(0,0,this.canvas.width,this.canvas.height);			
			return this;
		}		
		
		
		
		
		
		
		
		//End Canvas
	};	
	
	//Shortcut
	if(!window.Canvas){
		window.Canvas = Canvas;
	};	
})();
