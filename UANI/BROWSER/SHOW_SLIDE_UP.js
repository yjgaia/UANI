UANI.SHOW_SLIDE_UP = METHOD({

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
			height = UANI.HIDE_SLIDE_UP.getSavedHeights()[node.id];
		}

		params.keyframes = KEYFRAMES({
			from : {
				marginTop : height,
				height : 0,
				overflow : 'hidden'
			},
			to : {
				marginTop : 0,
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
