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

export default class toiletPage extends Component {

    render(){
        return(
            <TWebView url="http://baidu.com" />
        )
    }
}

var styles = StyleSheet.create({
    
});

module.exports = toiletPage;
