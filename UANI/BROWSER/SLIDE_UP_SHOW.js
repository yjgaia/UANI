UANI.SLIDE_UP_SHOW = METHOD({

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
		height = node.getHeight(),

		// params
		params = COPY(params);

		if (height === 0) {
			height = UANI.SLIDE_UP_HIDE.getSavedHeights()[node.id];
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

		ANIMATE(params, callback);
	}
});
