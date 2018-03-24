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
    ScrollView,
    NavigatorIOS,
} from 'react-native';

import Util from './util'

import Search from './read/search'
import List from './read/list'
import Recommned from './read/recommend'
import Topic from './read/topic'
import Category from './read/categoty'

class Line extends Component {
    render(){
        return(
            <View style = {styles.lineStyle} />
        )
    }
}

class Read extends Component{
    render(){
        return(
            <NavigatorIOS style={styles.container}
                initialRoute={{
                component: readPage,
                title: '阅读',
                navigationBarHidden: true
                }}
            />
        )
    }
}

 class readPage extends Component {

    constructor(props)
    {
        super(props)

        this.state={
            isShow:false,
        }
    };

    componentDidMount(){

        this._fetchData();
    };

    render(){
        return(
            <View style = {styles.container}>
                <Search />
                <Line />
                {
                    this.state.isShow? (<ScrollView style={styles.container} >
                        <Topic data={this.state.recommendTopic} navigator={this.props.navigator} />
                        <Line />
                        <Recommned title ="热门推荐" data = {this.state.hotTopic} navigator={this.props.navigator}/>
                        <Line />
                        <Category data={this.state.category} navigator={this.props.navigator}/>
                        <Line />
                        <Recommned title="清新一刻" data = {this.state.other} navigator={this.props.navigator} />
                        <View style={{height:60}} />
                    </ScrollView>):null

                }
            </View>
        )
    };

    _fetchData(callback){

         var self = this;
         Util.get('http://123.57.39.116:3000/data/read?type=config',function (data) {
             if(data)
             {
                 let obj = data.data;
                 self.setState({
                     isShow: true,
                     recommendTopic: obj.recommendTopic,
                     hotTopic: obj.hotTopic,
                     category: obj.category,
                     other: obj.other,
                     
                 });
             }else 
             {
                 alert('服务器异常');
             }
         },function (err) {
            alert('err');
         });
    };
}

var styles = StyleSheet.create({
    textStyle:{
        paddingTop: 20
    },
    lineStyle:{
        borderColor: '#F0F0F0',
        borderWidth: Util.pixel,
        marginTop: 10
    },
    container:{
        flex: 1
    }
});

module.exports = Read;
