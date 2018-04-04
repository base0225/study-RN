/**
 * Created by zhujia on 2017/2/13.
 */
//引入了rect库
import React, { Component } from 'react';

//引入了react-native组件和API
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView,
} from 'react-native';

export default class TWebView extends Component {

    constructor(props){
        super(props)
        this.state={
            url:this.props.url,
            isError:false,
        }
    }

    render(){
        return(
            <View style = {styles.containerStyle}>
        {
            this.state.isError?
            <View style = {styles.errorStyle}>
                <Text>网络加载失败,请重新加载</Text>
            </View>
            : <WebView
            onError={this._showerr.bind(this)}
            source={{uri: this.state.url}}
            startInLoadingState={true}
            style={{marginTop: -20}}
             />
        }
            </View>
        )
    }
    _showerr(){
        this.setState({
            isError:true
        })
    }
}
const styles = StyleSheet.create({
    containerStyle:{
       flex:1
   },

    errorStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});

module.exports = TWebView;