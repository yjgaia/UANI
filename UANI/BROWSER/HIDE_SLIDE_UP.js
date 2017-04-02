UANI.HIDE_SLIDE_UP = METHOD((m) => {
	
	let savedHeights = {};

	let getSavedHeight = m.getSavedHeight = () => {
		return getSavedHeight;
	};

	return {

		run : (params, callback) => {
			//REQUIRED: params
			//REQUIRED: params.node
			//OPTIONAL: params.duration
			//OPTIONAL: params.timingFunction
			//OPTIONAL: params.delay
			//OPTIONAL: params.iterationCount
			//OPTIONAL: params.direction
			//OPTIONAL: params.playStateduration
			//OPTIONAL: callback

			let node = params.node;

			let originHeight = node.getInnerHeight();

			let params = COPY(params);

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
