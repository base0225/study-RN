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
    NavigatorIOS,
    ScrollView,
    Image
} from 'react-native';
//
import Help from './setting/help'
import Detail from './setting/detail'
import Tip from './setting/tip'
import About from './setting/about'

import Util from './util'

class SetPage extends Component {
    render(){
        return(
            <ScrollView style={styles.container}>
            <View style = {styles.container}>
                 <View style={{justifyContent:'center', alignItems: 'center',marginTop:10,marginBottom:20}}>
                     <Image style={styles.icon} source={require('../html/toilter.png')} resizeMode="contain"/>
                     <Text style={[styles.text, {fontSize:13}]}>模仿,by zhujia</Text>
                 </View>
            </View>
                <TouchableOpacity onPress={this._showDetail.bind(this)}>
                <View style={[styles.item, {borderTopWidth:Util.pixel}]}>
                    <Text style={styles.text}>功能介绍</Text>
                </View>
            </TouchableOpacity>
                <TouchableOpacity onPress={this._showhelp.bind(this)}>
                    <View style={[styles.item, {borderTopWidth:Util.pixel}]}>
                        <Text style={styles.text}>帮助中心</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._showTips.bind(this)}>
                    <View style={[styles.item, {borderTopWidth:Util.pixel}]}>
                        <Text style={styles.text}>服务条款</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._showAbout.bind(this)}>
                    <View style={[styles.item, {borderTopWidth:Util.pixel}]}>
                        <Text style={styles.text}>关于</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    };

    _showDetail(){
        this.props.navigator.push({
            component: Detail,
            title: '功能介绍',
            barTintColor: '#fff'
        });

    }

    _showhelp(){
        this.props.navigator.push({
            component: Help,
            title: '帮助中心',
            barTintColor: '#fff'
        });
    }

    _showTips(){
        this.props.navigator.push({
            component: Tip,
            title: '服务条款',
            barTintColor: '#fff'
        });
    }

    _showAbout(){
        this.props.navigator.push({
            component: About,
            title: '关于',
            barTintColor: '#fff'
        });
    }
}

class setting extends Component{
    render(){
        return(
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
          component: SetPage,
          title: '设置',
          navigationBarHidden: true
      }}/>
        );
    }
}

var styles = StyleSheet.create({
    container:{
     flex: 1
    },
    textStyle:{
        paddingTop:20
    },
    icon:{
        width:88,
        height:100,
        marginTop: 40,
    },
    text:{
        fontSize:15,
        marginLeft:10,
        color: '#7E7F7E'
    },
    item:{
        height:50,
        backgroundColor:'#fff',
        borderBottomWidth: Util.pixel,
        borderColor:'#ccc',
        justifyContent: 'center'
    },
    text:{
        fontSize:15,
        marginLeft:10,
        color: '#7E7F7E'
    }
});

module.exports = setting;
