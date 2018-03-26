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

class recommend extends Component {

    constructor(props){
        super(props);
        this.state = {
             data : this.props.data,
             title: this.props.title,
        }
    }

    render(){
        let data = this.state.data;
        let first = [];
        let second = [];
        for(var i in data) {
            var Item = (
                <View style={styles.topic} key={i}>
                    <TouchableOpacity onPress={this._showDetail.bind(this, data[i].title, data[i].url)}>
                    <View style = {styles.shadow}>
                        <Image style={styles.topicImage} source={{uri:data[i].img}} resizeMode="cover"/>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._showDetail.bind(this, data[i].title, data[i].url)}>
                    <View>
                        <Text style={styles.title} numberOfLines = {2}>{data[i].title}</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            )
            if(i < 4){
                first.push(Item);
            }else{
                second.push(Item);
            }
        }
        return(
            <View style={styles.hot}>
              <View>
               <Text style={styles.bigText}>{this.props.title}</Text>
              </View>
              <View style={[styles.row, {marginTop:10}]}>
                  {first}
              </View>
                <View style={[styles.row, {marginTop:10}]}>
                    {second}
                </View>
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
    topic:{
      flex: 1,
        alignItems:   'center',
      marginLeft: 7,
    },
    shadow:{
        shadowOpacity: 1,
        shadowColor: '#ccc',
        shadowOffset:{width: 1*Util.pixel, height: Util.pixel}
    },
    topicImage:{
        height: 100,
        width:(Util.size.width-40)/4,
        marginRight: 5,
    },
    title:{
        fontSize:13,
        color: '#4C4C4C'
    },
    hot:{
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    bigText:{
        fontSize:17,
        fontWeight: '300',
        marginBottom: 5
    },
    row:{
        flexDirection: 'row'
    }

});

module.exports = recommend;
