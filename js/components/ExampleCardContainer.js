/* @flow */
'use strict';

var React = require('react-native');
var Card = require('./ExampleCard');

var {
  StyleSheet,
  View,
  ScrollView
} = React;

var ExampleCardsContainer = React.createClass({

	render: function() {

		if (Object.keys(this.props.objects).length < 1) {
	  		return null;
		}

		var allObjects = this.props.objects.map(function(object){
			return <Card />
		});

		console.log(allObjects);

		return (<ScrollView>
					{ allObjects }
				</ScrollView>
			);
	}

});

module.exports = ExampleCardsContainer;
