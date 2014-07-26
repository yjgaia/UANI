UANI.SLIDE_RIGHT_SHOW = METHOD({

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
		// dom
		dom = params.node.getDom(),

		// width
		width = dom.getWidth(),
		
		// margin left
		marginLeft = dom.getStyle('marginLeft'),

		// params
		params = COPY_DATA(params);

		if (width === 0) {
			width = UANI.SLIDE_RIGHT_HIDE.getSavedWidths()[dom.id];
		}

		params.keyframes = KEYFRAMES({
			from : {
				width : width,
				marginLeft : marginLeft === undefined ? width : marginLeft,
				overflow : 'hidden'
			},
			to : {
				marginLeft : 0,
				overflow : dom.getStyle('overflow')
			}
		});

		ANIMATE(params, callback);
	}
});
