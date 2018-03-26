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
    Image,
    TouchableOpacity
} from 'react-native';

import Util from '../../ios_views/util'
import TWebView from '../../ios_views/twebView'

class Topic extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : this.props.data
        }
    };

    render(){
        let data = this.state.data;
        let data0 = data[0];
        let data1 = data[1];

        return(
            <View style = {styles.tj}>
               <View style = {styles.tjTitle}>
                 <Text style = {styles.biggerStyle}>推荐主题</Text>
               </View>

               <View style = {[styles.row,styles.tjTopic]}>
                   <TouchableOpacity  onPress={this._showDetail.bind(this,data0.title,data0.url)}>
                   <Image source = {{uri:data0.img}} resizeMode="stretch" style = {styles.img}/>
                   </TouchableOpacity>
                   <TouchableOpacity  onPress={this._showDetail.bind(this,data1.title,data1.url)}>
                   <Image source = {{uri:data1.img}} resizeMode="stretch" style = {styles.img}/>
                   </TouchableOpacity>
               </View>

                   <Text style = {styles.tjTQText}>推荐同期专题 &gt; </Text>
            </View>
        )
    };

    _showDetail(title,url){
        this.props.navigator.push({
            component:TWebView,
            title:title,
            passProps:{
              url: url,
              isMargin:1
            }
        })
    }
}

var styles = StyleSheet.create({

    tj:{
       marginTop: 5,
       marginLeft: 10,
       marginRight: 10,
    },
    tjTitle:{

    },
    biggerStyle:{
        fontSize: 17,
        fontWeight: '300',
        marginBottom: 5,
    },
    img:{
        marginLeft: 5,
        height: 100,
        width: (Util.size.width - 30)/2,
        borderRadius: 5,
    },
    row:{
       flexDirection: 'row'
    },
    tjTQText:{
        fontWeight: '300',
        fontSize:15,
        color: '#7D7D81'
    },
    tjTopic:{
        marginTop: 10
    }
});

module.exports = Topic;
