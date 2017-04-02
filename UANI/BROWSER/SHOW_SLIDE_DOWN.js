UANI.SHOW_SLIDE_DOWN = METHOD({

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

		let height = node.getInnerHeight();

		params = COPY(params);

		if (height === 0) {
			height = UANI.HIDE_SLIDE_DOWN.getSavedHeights()[node.id];
		}

		params.keyframes = KEYFRAMES({
			from : {
				height : 0,
				overflow : 'hidden'
			},
			to : {
				height : height,
				overflow : node.getStyle('overflow')
			}
		});

		ANIMATE(params, () => {
			
			node.addStyle({
				height : 'auto'
			});
			
			if (callback !== undefined) {
				callback();
			}
		});
	}
});
