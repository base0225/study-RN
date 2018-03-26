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
    View,
    TextInput
} from 'react-native';

class search extends Component {

    render(){
        return(
            <View style = {styles.container}>
               <TextInput style = {styles.textInputStyles} placeholder="搜索"/>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    textInputStyles:{
        height: 40,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        paddingLeft: 5,
        borderRadius: 3,
        fontSize: 14,
    },
    container:{
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10
    }
});

module.exports = search;
