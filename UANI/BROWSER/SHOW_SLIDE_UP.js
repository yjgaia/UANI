UANI.SHOW_SLIDE_UP = METHOD({

	run : function(params, callback) {
		'use strict';
		//REQUIRED: params
		//REQUIRED: params.node
		//OPTIONAL: params.duration
		//OPTIONAL: params.timingFunction
		//OPTIONAL: params.delay
		//OPTIONAL: params.iterationCount
		//OPTIONAL: params.direction
		//OPTIONAL: params.playStateduration
		//OPTIONAL: callback

		var
		// node
		node = params.node,

		// height
		height = node.getInnerHeight(),

		// params
		params = COPY(params);

		if (height === 0) {
			height = UANI.HIDE_SLIDE_UP.getSavedHeights()[node.id];
		}

		params.keyframes = KEYFRAMES({
			from : {
				marginTop : height,
				height : 0,
				overflow : 'hidden'
			},
			to : {
				marginTop : 0,
				height : height,
				overflow : node.getStyle('overflow')
			}
		});

		ANIMATE(params, function() {
			
			node.addStyle({
				height : 'auto'
			});
			
			if (callback !== undefined) {
				callback();
			}
		});
	}
});
