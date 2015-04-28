/* @flow */
'use strict';

var React = require('react-native');
var Header = require('./components/ExampleHeader');
var CardContainer = require('./components/ExampleCardContainer.js');
var ExampleStore = require('./stores/ExampleStore');

var {
  StyleSheet,
  View,
  ScrollView
} = React;

function getExampleState() {
	return {
		allObjects: ExampleStore.getAll()
	}
}

var App = React.createClass({

	getInitialState: function() {
		return getExampleState();
	},

	componentDidMount: function() {
		ExampleStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		ExampleStore.removeChangeListener(this._onChange);
	},

	render: function() {

    	return (
      		<View style={styles.container}>
      			<Header/>
      			<CardContainer objects={this.state.allObjects} />
      		</View>
    	);
  	},

	_onChange: function() {
		this.setState(getExampleState());
  	}

});


var styles = StyleSheet.create({
	container: {
		flex: 1
	}
});


module.exports = App;
