var AppDispatcher = require("../dispatcher/AppDispatcher");
var AppStoreConstant = require("../constants/AppStoreConstant");

var AppStoreActions = {
	loadApps = function (data) {
		AppDispatcher.handleAction({
			actionType: AppStoreConstant.LOAD_SHOES,
			data: data
		});
	}
};

module.exports = AppStoreActions;