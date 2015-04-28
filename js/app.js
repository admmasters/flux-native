/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
} = React;

var Component = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
});


var styles = StyleSheet.create({
	container: {
		flex: 1
	}
});


module.exports = Component;
