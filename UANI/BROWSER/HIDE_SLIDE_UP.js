UANI.HIDE_SLIDE_UP = METHOD(function(m) {
	'use strict';

	var
	// saved heights
	savedHeights = {},

	// get saved height.
	getSavedHeight;

	m.getSavedHeight = getSavedHeight = function() {
		return getSavedHeight;
	};

	return {

		run : function(params, callback) {
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

			// origin height
			originHeight = node.getInnerHeight(),

			// params
			params = COPY(params);

			savedHeights[node.id] = originHeight;

			params.keyframes = KEYFRAMES({
				from : {
					height : originHeight,
					overflow : node.getStyle('overflow')
				},
				to : {
					height : 0,
					overflow : 'hidden'
				}
			});

			ANIMATE(params, callback);
		}
	};
});
