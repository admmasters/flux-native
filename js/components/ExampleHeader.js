/* @flow */
'use strict';

var React = require('react-native');
var ExampleActions = require('../actions/ExampleActions');
var HeaderButton = require('./HeaderButton');

var {
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Text
} = React;

var ExampleHeader = React.createClass({

	blueCreate: function() {
		ExampleActions.create("Action");
	},

	redRemove: function() {
		ExampleActions.remove();
	},

	render: function() {
		return (
		      	<View style={{flexDirection: 'row', height: 80, padding: 0}}>
		      		<HeaderButton onPress={this.blueCreate} color='blue'>Add</HeaderButton>
		      		<HeaderButton onPress={this.redRemove} color='red'>Remove</HeaderButton>
				</View>
    	);
	}
});


var styles = StyleSheet.create({
	headerBar: {
		flex: 1,
		height: 80
	},
	navButton: {
		flex: 0.5,
	},
	leftButton: {
		backgroundColor: 'blue',
	},
	rightButton: {
		backgroundColor: 'red',
	},
	textButton: {
		color: 'white',
		textAlign: 'center'
	}
});

/*

		      	<TouchableHighlight onPress={this.handlePress} underlayColor="white">
		      		<View style={[styles.navButton,styles.leftButton]}/>
	      		</TouchableHighlight>
	      		<TouchableHighlight onPress={this.handlePress} underlayColor="white">
		      		<View style={[styles.navButton,styles.rightButton]}/>
		      	</TouchableHighlight>

*/


module.exports = ExampleHeader;
