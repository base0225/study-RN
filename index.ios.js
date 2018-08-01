/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
    AppRegistry
} from 'react-native';

var RCTLog = require('RCTLog');

var listViewDemo = require('./listViewDemo/provider');
AppRegistry.registerComponent('listViewDemo', () => listViewDemo);

