var AppDispatcher = require("../dispatcher/AppDispatcher");
var AppConstants = require("../constants/AppConstants");
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");

var _apps = {};

function loadApp (data) {
	_app = data.app;
}	

var AppStore = assign(EventEmitter.prototype, {
	getApps: function () {
		return _apps;
	},
	emitChange: function () {
		this.emit("change");
	},
	addChangeListener: function (callback) {
		this.on("change", callback);
	},
	removeChangeListener: function (callback) {
		this.removeListener("change", callback);
	}
});

AppDispatcher.register(function (payload) {
	var action = payload.action;
	var text;

	switch(action.actionType) {
		case AppConstants.LOAD_APPS: 
			loadApps(action.data);
			break;
		default: 
			return true;
	}
	AppStore.emitChange();
	return true;
});

module.exports = AppStore;