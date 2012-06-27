;(function(){
	
	//Debbuger
	if(!window.log){
		window.log = function (message) {
			try {
				console.log(message);
			} catch (exception) {
				return;
			}
		}
	};
	
	/* Object extend */
	if(!window.extendObject){
		window.extendObject = function(destination, source) {
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
		
})();

