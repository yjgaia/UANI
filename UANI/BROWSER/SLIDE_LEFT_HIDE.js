UANI.SLIDE_LEFT_HIDE = METHOD(function(m) {
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

			// origin width
			originWidth = node.getInnerWidth(),

			// origin margin left
			originMarginLeft = node.getStyle('marginLeft'),

			// params
			params = COPY(params);

			savedWidths[node.id] = originWidth;

			params.keyframes = KEYFRAMES({
				from : {
					width : originWidth,
					marginLeft : originMarginLeft === undefined ? 0 : originMarginLeft,
					overflow : node.getStyle('overflow')
				},
				to : {
					marginLeft : width === undefined ? originWidth : width,
					overflow : 'hidden'
				}
			});

			ANIMATE(params, callback);
		}
	};
});
