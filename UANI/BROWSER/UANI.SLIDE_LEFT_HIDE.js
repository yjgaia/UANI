UANI.SLIDE_LEFT_HIDE = METHOD(function(m) {'use strict';

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
			// dom
			dom = params.node.getDom(),

			// width
			width = params.width,

			// margin left
			marginLeft,

			// origin width
			originWidth = dom.getWidth(),

			// origin margin left
			originMarginLeft = dom.getStyle('marginLeft'),

			// params
			params = COPY_DATA(params);

			marginLeft = UANI.SLIDE_LEFT_SHOW.getSavedMarginLefts()[dom.id];

			if (marginLeft === undefined) {
				marginLeft = 0;
			}

			savedWidths[dom.id] = originWidth;

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
