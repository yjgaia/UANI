// run: nodemon UANI.js

require('./UPPERCASE_ONE/BOOT.js');

BOOT({
	CONFIG : {
		isDevMode : true
	},
	BROWSER_CONFIG : {
		MAIN : function(ONE) {

			ONE.MATCH_VIEW({
				uris : [''],
				target : CLASS({

					preset : function() {'use strict';
						return VIEW;
					},

					init : function(inner, self) {'use strict';

						var
						// wrapper
						wrapper,

						// fade
						fade,

						// slide down
						slideDown,

						// slide up
						slideUp,

						// slide left
						slideLeft,

						// slide right
						slideRight,

						// slide right2
						slideRight2,

						// close.
						close;

						wrapper = DIV({
							style : {
								width : 400,
								margin : 'auto',
								backgroundColor : 'green'
							}
						}).appendTo(BODY);

						fade = DIV({
							style : {
								fontSize : 50
							},
							c : [P({
								c : ['FADE!!!']
							})]
						}).appendTo(wrapper);

						UANI.FADE_OUT({
							node : fade,
							duration : 1
						}, function() {

							UANI.FADE_IN({
								node : fade,
								duration : 1
							});
						});

						slideUp = DIV({
							style : {
								fontSize : 50
							},
							c : [P({
								c : ['SLIDE UP!!!']
							})]
						}).appendTo(wrapper);

						UANI.SLIDE_UP_HIDE({
							node : slideUp,
							duration : 1
						}, function() {

							UANI.SLIDE_UP_SHOW({
								node : slideUp,
								duration : 1
							});
						});

						slideDown = DIV({
							style : {
								fontSize : 50
							},
							c : [P({
								c : ['SLIDE DOWN!!!']
							})]
						}).appendTo(wrapper);

						UANI.SLIDE_DOWN_HIDE({
							node : slideDown,
							duration : 1
						}, function() {

							UANI.SLIDE_DOWN_SHOW({
								node : slideDown,
								duration : 1
							});
						});

						slideLeft = DIV({
							style : {
								fontSize : 50
							},
							c : [P({
								c : ['SLIDE LEFT!!!']
							})]
						}).appendTo(wrapper);

						UANI.SLIDE_LEFT_HIDE({
							node : slideLeft,
							duration : 1
						}, function() {

							UANI.SLIDE_LEFT_SHOW({
								node : slideLeft,
								duration : 1
							});
						});

						slideRight = DIV({
							style : {
								fontSize : 50
							},
							c : [P({
								c : ['SLIDE RIGHT!!!']
							})]
						}).appendTo(wrapper);

						UANI.SLIDE_RIGHT_HIDE({
							node : slideRight,
							duration : 1
						}, function() {

							UANI.SLIDE_RIGHT_SHOW({
								node : slideRight,
								duration : 1
							});
						});

						slideRight2 = DIV({
							style : {
								marginLeft : -400,
								fontSize : 50,
								width : 800
							},
							c : [DIV({
								style : {
									width : 400,
									background : 'red',
									flt : 'left'
								},
								c : [P({
									c : ['SLIDE']
								})]
							}), DIV({
								style : {
									width : 400,
									background : 'blue',
									flt : 'left'
								},
								c : [P({
									c : ['SLIDE']
								})]
							}), CLEAR_BOTH()]
						}).appendTo(wrapper);

						UANI.SLIDE_LEFT_SHOW({
							node : slideRight2,
							duration : 1
						}, function() {

							UANI.SLIDE_LEFT_HIDE({
								node : slideRight2,
								duration : 1
							});
						});

						//OVERRIDE: self.close
						self.close = close = function(params) {
							div.remove();
						};
					}
				})
			});
		}
	}
});
