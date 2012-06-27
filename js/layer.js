//Layer
;(function(){
	var Layer = function(idElement){
		this.init(idElement);
	};
	
	Layer.prototype = {
		type : 'layer',
					
		init : function(arg){
			if(typeof arg == 'string'){
				this.id = arg;
			}else{
				this.id = 'none';
			};
			this.canvas = null;
			this.added = false;
			this.visible = true;
			this.x = 0;
			this.y = 0;
			this.xscale = 1;
			this.yscale = 1;
			this.rotation = 0;
			this.sprites = [];
			this.length = 0;
		},			
		
		show : function(){
			this.visible = true;				
			return this;
		},
		hide : function(){
			this.visible = false;
			return this;
		},
		
		translate : function(arg1,arg2){
			this.x = arg1;
			if(arg2==undefined){arg2 = arg1;}
			this.y = arg2;
			return this;
		},
		scale : function(arg1,arg2){
			this.xscale = arg1;
			if(arg2==undefined){arg2 = arg1;}
			this.yscale = arg2;
			return this;
		},
		rotate : function(arg){
			this.rotation = arg;
			return this;
		},
		
		addTo : function(arg){
			if(arg.type == 'canvas'){
				arg.add(this);
			}				
			return this;
		},
		
		add : function(arg){
			if(arg.type == 'sprite'){
				this.sprites.push(arg);
				this.length++;					
				return this;
			}
			return this;
		}		
		//End Layer
	};	
	
	//Shortcut
	if(!window.Layer){
		window.Layer = Layer;
	};	
})();