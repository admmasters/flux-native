'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ExampleConstants = require('../constants/ExampleConstants');
var merge = require('../../node_modules/react-native/Libraries/Utilities/mergeFast');

var CHANGE_EVENT = 'change';

var _objects = [];

function create( text ) {

	var id = _objects.length;

	_objects[_objects.length] = {
		id: id,
		text: text + ' ' + id
	};
}

function remove() {

	if(_objects.length>0){
		_objects.splice(_objects.length-1,1);
	}
}

var ExampleStore = merge(EventEmitter.prototype, {

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function( callback ) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function( callback ) {
		this.removeChangeListener(CHANGE_EVENT,callback);
	},

	getAll: function() {
		return _objects;
	}

});

AppDispatcher.register( function(action) {

	switch(action.actionType){

		case ExampleConstants.EXAMPLE_CREATE: {
			create(action.text);
			ExampleStore.emitChange();
		} break;

		case ExampleConstants.EXAMPLE_REMOVE: {
			remove();
			ExampleStore.emitChange();
		} break;

	}

});

module.exports = ExampleStore;