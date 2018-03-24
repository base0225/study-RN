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
    TouchableOpacity,
} from 'react-native';

import Util from '../../ios_views/util'
import List from './list'

class categoty extends Component {

    constructor(props){
        super(props);
        this.state={
            data:this.props.data,
        }
    }

    render(){
        let data = this.state.data;
        let first = [];
        let second = [];

        for(var i in data){
            let Item = (
                <TouchableOpacity style={[styles.categoryTopic]} key={i} onPress={this._goList.bind(this,data[i].text)}>
                <Text style={styles.textStyle}>{data[i].text}</Text>
                </TouchableOpacity>
            );
            if(i<2)
            {
                first.push(Item);
            }else
            {
                second.push(Item);
            }
        }

        return(
            <View style={{marginRight:10}}>
                <View>
                    <Text style={[styles.bigText, {marginLeft:10}]}>分类</Text>
                </View>
                <View style={[styles.row, {marginTop:10}]}>
                    {first}
                </View>
                <View style={[styles.row, {marginTop:10}]}>
                    {second}
                </View>
            </View>
        )
    }

    _goList(keywords){
        var type = 'it';
        switch (keywords){
            case '互联网':
                type = 'it';
                break;
            case '管理':
                type = 'manger';
                break;
            case '笑话':
                type = 'cookie';
                break;
            case '散文':
                type = 'sanwen';
                break;
            default:
                type = 'it';
                break;
        }

        let url = 'http://123.57.39.116:3000/data/read?type=' + type;

        this.props.navigator.push({
            component: List,
            title: keywords,
            barTintColor: '#fff',
            passProps:{
                url: url,
            }
        })
    }
}

var styles = StyleSheet.create({
    textStyle:{
        fontSize:17,
        fontWeight:'300'
    },
    bigText:{
        marginTop: 5,
        fontSize:17,
        fontWeight: '300',
        marginBottom: 5
    },
    row:{
        flexDirection: 'row'
    },
    categoryTopic:{
        height: 70,
        borderWidth: Util.pixel,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        borderRadius: 3,
        marginLeft:10
    },
});

module.exports = categoty;
