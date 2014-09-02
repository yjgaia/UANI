UANI.SLIDE_LEFT_SHOW = METHOD(function(m) {
	'use strict';

	var
	// saved margin lefts
	savedMarginLefts = {},

	// get saved margin lefts.
	getSavedMarginLefts;

	m.getSavedMarginLefts = getSavedMarginLefts = function() {
		return savedMarginLefts;
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

			// width
			width = node.getWidth(),

			// margin left
			marginLeft = node.getStyle('marginLeft'),

			// params
			params = COPY(params);

			if (width === 0) {
				width = UANI.SLIDE_LEFT_HIDE.getSavedWidths()[node.id];
			}

			savedMarginLefts[node.id] = marginLeft;

			params.keyframes = KEYFRAMES({
				from : {
					width : width,
					marginLeft : marginLeft === undefined ? -width : marginLeft,
					overflow : 'hidden'
				},
				to : {
					marginLeft : 0,
					overflow : node.getStyle('overflow')
				}
			});

			ANIMATE(params, callback);
		}
	};
});
