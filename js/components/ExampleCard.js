/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
} = React;

var ExampleCard = React.createClass({
  render: function() {
    return (
      <View style={[styles.cardBorder,styles.cardSize]}>
      </View>
    );
  }
});


var styles = StyleSheet.create({
	cardBorder: {
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 8
	},

	cardSize: {
		height: 64
	}
});


module.exports = ExampleCard;
