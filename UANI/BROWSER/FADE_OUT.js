UANI.FADE_OUT = METHOD({

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

		let params = COPY(params);

		params.keyframes = KEYFRAMES({
			from : {
				opacity : 1
			},
			to : {
				opacity : 0
			}
		});

		ANIMATE(params, callback);
	}
});
