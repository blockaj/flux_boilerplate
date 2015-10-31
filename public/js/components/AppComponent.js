var React = require("react");
var AppStore = require("../stores/AppStore");

console.log(AppStore.getApps());

function getAppState () {
	return {
		apps: AppStore.getApps()
	}
}

var AppStoreApp = React.createClass({
	getInitialState: function () {
		return getAppState();
	},
	componentDidMount: function () {
		AppStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function () {
		AppStore.removeChangeListener(this._onChange);
	},
	render: function () {
		<AppStore apps={this.state.apps} />
	},
	_onChange: function () {
		this.setState(getAppState());
	}
});

var AppStore = React.createClass({
	render: function () {
		<h1>{this.props.apps}</h1>
	}
});

module.exports = AppStoreApp;