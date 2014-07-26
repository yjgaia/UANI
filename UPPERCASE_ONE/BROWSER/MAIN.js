UPPERCASE_ONE.MAIN = METHOD({

	run : function() {'use strict';

		if (BROWSER_CONFIG.MAIN !== undefined) {
			BROWSER_CONFIG.MAIN(UPPERCASE_ONE);
		}
	}
});
