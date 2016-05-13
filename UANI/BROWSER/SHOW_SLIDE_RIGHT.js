UANI.SHOW_SLIDE_RIGHT = METHOD({

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

		// width
		width = node.getInnerWidth(),

		// margin left
		marginLeft = node.getStyle('marginLeft'),

		// params
		params = COPY(params);

		if (width === 0) {
			width = UANI.HIDE_SLIDE_RIGHT.getSavedWidths()[node.id];
		}

		params.keyframes = KEYFRAMES({
			from : {
				width : width,
				marginLeft : marginLeft === undefined ? width : marginLeft,
				overflow : 'hidden'
			},
			to : {
				marginLeft : 0,
				overflow : node.getStyle('overflow')
			}
		});

		ANIMATE(params, callback);
	}
});
