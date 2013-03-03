//HiperCanvas

;(function(){
	var hc = function(idNodeElement){
		this.init(idNodeElement);
	};
	
	hc.prototype = {
		
		init : function(arg){
			if(arg === undefined){
				this._id = 'none';
				this._canvas = document.getElementsByTagName('canvas')[0];
			}else{
				this._id = arg;
				this._canvas = document.getElementById(arg);
			}
			this._c = this._canvas.getContext('2d');
			/*this._width = this.width();
			this._height = this.height();*/
			this._layers = [];
			this._length = 0;
			
			this.countLayer = 0;
			return this;
		},
		createLayer : function(arg){
			if(arg==undefined){arg=this.countLayer++;};
			var newLayer = {
				_id : arg,
				_visible : true,
				_sprites : [],
				_length : 0
			};
			this._layers.push(newLayer);
			this._length++;
			return this;
		},
		deleteLayer : function(arg){
			return this;
		},
		
		visibleLayer : function(arg,trueFalse){
			for(var i=0;i<this._layers.length;i++){
				if(this._layers[i]._id==arg){
					this._layers[i]._visible = trueFalse;
				}
			};
			return this;
		},
		showLayer : function(arg){
			this.visibleLayer(arg,true);
			return this;
		},
		hideLayer : function(arg){
			this.visibleLayer(arg,false);
			return this;
		},
		
		

	}
	
	//Shortcut
	if(!window.hc){
		window.hc = hc;
	};
	
	
})();
