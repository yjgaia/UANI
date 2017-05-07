UANI_SHOWCASE.MAIN = METHOD({

	run : (params) => {
		
		let node = DIV({
			c : H1({
				style : {
					fontSize : 100
				},
				c : 'UANI SHOWCASE'
			})
		}).appendTo(BODY);
		
		UANI.FADE_IN({
			node : node,
			duration : 1
		});
	}
});
