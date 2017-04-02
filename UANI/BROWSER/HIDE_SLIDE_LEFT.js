UANI.HIDE_SLIDE_LEFT = METHOD((m) => {
	
	let savedWidths = {};

	let getSavedWidths = m.getSavedWidths = () => {
		return savedWidths;
	};

	return {

		run : (params, callback) => {
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

			let node = params.node;
			let width = params.width;

			let marginLeft;
			let originWidth = node.getInnerWidth();
			let originMarginLeft = node.getStyle('marginLeft');

			let params = COPY(params);

			marginLeft = UANI.SHOW_SLIDE_LEFT.getSavedMarginLefts()[node.id];

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
