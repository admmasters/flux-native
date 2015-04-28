/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry
} = React;

var App = require('./js/app.js');

var FluxNative = React.createClass({
  render: function() {
    return (
      <App/>
    );
  }
});

AppRegistry.registerComponent('FluxNative', () => FluxNative);
