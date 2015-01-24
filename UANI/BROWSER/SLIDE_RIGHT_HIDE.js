UANI.SLIDE_RIGHT_HIDE = METHOD(function(m) {
	'use strict';

	var
	// saved widths
	savedWidths = {},

	// get saved widths.
	getSavedWidths;

	m.getSavedWidths = getSavedWidths = function() {
		return savedWidths;
	};

	return {

		run : function(params, callback) {
			//REQUIRED: params
			//REQUIRED: params.node
			//OPTIONAL: params.width
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
			width = params.width,

			// margin left
			marginLeft,

			// origin width
			originWidth = node.getInnerWidth(),

			// origin margin left
			originMarginLeft = node.getStyle('marginLeft'),

			// params
			params = COPY(params);

			marginLeft = UANI.SLIDE_LEFT_SHOW.getSavedMarginLefts()[node.id];

			if (marginLeft === undefined) {
				marginLeft = 0;
			}

			savedWidths[node.id] = originWidth;

			params.keyframes = KEYFRAMES({
				from : {
					width : originWidth,
					marginLeft : originMarginLeft === undefined ? 0 : originMarginLeft,
					overflow : 'hidden'
				},
				to : {
					marginLeft : -(width === undefined ? originWidth : width) - marginLeft,
					overflow : 'hidden'
				}
			});

			ANIMATE(params, callback);
		}
	};
});
