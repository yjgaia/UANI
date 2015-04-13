UANI.SLIDE_DOWN_SHOW = METHOD({

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
			height = UANI.SLIDE_DOWN_HIDE.getSavedHeights()[node.id];
		}

		params.keyframes = KEYFRAMES({
			from : {
				height : 0,
				overflow : 'hidden'
			},
			to : {
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
