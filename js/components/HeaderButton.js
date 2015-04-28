/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} = React;

var Component = React.createClass({
  render: function() {
    return (
		<TouchableOpacity onPress={this.props.onPress}>
			<View style={{ backgroundColor: this.props.color , flex: 0.5, justifyContent: 'center'}}>
				<Text style={styles.textButton} >{this.props.children}</Text>
			</View>
		</TouchableOpacity>
    );
  }
});


var styles = StyleSheet.create({
	textButton: {
		color: 'white',
		textAlign: 'center'
	}
});


module.exports = Component;
