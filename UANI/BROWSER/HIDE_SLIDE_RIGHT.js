UANI.HIDE_SLIDE_RIGHT = METHOD((m) => {
	
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

			let originWidth = node.getInnerWidth();
			let originMarginLeft = node.getStyle('marginLeft');

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
