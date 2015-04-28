'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var ExampleConstants = require('../constants/ExampleConstants.js');

var ExampleActions = {

	create: function( text ) {
		AppDispatcher.dispatch({
			actionType: ExampleConstants.EXAMPLE_CREATE,
			text: text
		});
	},

	remove: function() {
		AppDispatcher.dispatch({
			actionType: ExampleConstants.EXAMPLE_REMOVE
		});
	}
}

module.exports = ExampleActions;
