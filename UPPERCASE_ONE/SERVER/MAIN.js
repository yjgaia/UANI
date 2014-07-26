UPPERCASE_ONE.MAIN = METHOD({

	run : function() {'use strict';

		if (NODE_CONFIG.MAIN !== undefined) {
			NODE_CONFIG.MAIN(UPPERCASE_ONE);
		}
	}
});
