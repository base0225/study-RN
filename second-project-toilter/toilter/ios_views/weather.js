/**
 * Created by zhujia on 2017/2/12.
 */

//引入了rect库
import React, { Component } from 'react';

//引入了react-native组件和API
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import TWebView from './twebView'

const url = 'http://123.57.39.116:3000/html/weather.html';

export default class weatherPage extends Component {

    render(){
        return(
            <TWebView url={url} isWeather={true}/>
        )
    }
}

var styles = StyleSheet.create({
    textStyle:{
        paddingTop:20
    }
});

module.exports = weatherPage;
