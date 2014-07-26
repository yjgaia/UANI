UANI.FADE_IN = METHOD({

	run : function(params, callback) {'use strict';
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
		// params
		params = COPY_DATA(params);

		params.keyframes = KEYFRAMES({
			from : {
				opacity : 0
			},
			to : {
				opacity : 1
			}
		});

		ANIMATE(params, callback);
	}
});
