//Initial
;(function(){
	//Utils
	//k
	if(!window.k){
		window.k = function(arg){
			console.log(arg);
		}
	};
	/* Object extend */
	if(!window.extend){
		window.extend = function(destination, source) {
			for (var property in source) {
				if (source[property] && source[property].constructor && source[property].constructor === Object) {
					destination[property] = destination[property] || {};
					arguments.callee(destination[property], source[property]);
				}else{
					destination[property] = source[property];
				};
			};
			return destination;
		};
	};
	
	//Shortcut
	if(!window.layerIdCounter){
		window.layerIdCounter = 0;
	};
	
	//SHAPES
	//Rectangle
	if(!window.rectangle){
		window.rectangle = function(width, height){
			if(width==undefined){width = 100;};
			if(height==undefined){height = 60;}
			return {
				points : [[0,0],[width,0],[width,height],[0,height],[0,0]],
				lines : ['line','line','line','line']
			};
		};
	}
	//Line
	if(!window.line){
		window.line = function(large,angle){
			if(large==undefined){large = 100;};
			if(angle==undefined){angle = 0;}
			return {
				points : [[0,0],[large*Math.cos(angle*Math.PI/180),large*Math.sin(angle*Math.PI/180)]],
				lines : ['line']
			};
		};
	}
	
	window.actionFrames = [];
	window.frameTime = 1000/30
	
	setInterval(function(){
		var actionFramesLength = window.actionFrames.length;
		for(var ic=0;ic<actionFramesLength;ic++){
			window.actionFrames[ic].animation().render();
		}		
	},window.frameTime);
	
	
})();

