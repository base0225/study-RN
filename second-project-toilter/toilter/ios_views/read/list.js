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
    ListView,
    TouchableOpacity
} from 'react-native';

import Util from '../../ios_views/util'
import TWebView from '../../ios_views/twebView'

class List extends Component {

    constructor(props){
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state={
            url:props.url,
            dataSource: ds.cloneWithRows([]),
        }
    }
    
    componentDidMount(){
        let that = this;
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        Util.get(this.state.url, function (data) {
            console.log(data);
              if(data.status === 1)
              {
                  let obj = data.data;
                  that.setState({
                      dataSource:ds.cloneWithRows(obj),
                  });
              }else {
                  alert('服务器异常');
              }
        },function (err) {
            alert(err);
        })
    }

    render(){
        return(
            <ListView style={styles.container}
                dataSource={this.state.dataSource}
                enableEmptySections={true}
                renderRow={(rowData) => (
                    <TouchableOpacity style={[styles.item,styles.row]} onPress={this._showDetail.bind(this,rowData.title,rowData.url)}>
                      <View>
                       <Image source = {{uri:rowData.img}} style={styles.img} resizeMode="cover"/>
                      </View>
                       <View style={styles.text}>
                          <Text style={styles.title} numberOfLines={1}>{rowData.title}</Text>
                          <Text style={styles.name}>{rowData.time} </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
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
    container:{
        flex: 1
    },
    img:{
        height:60,
        width:60,
        marginLeft:10,
        marginTop:5,
        borderWidth:Util.pixel,
        borderRadius:3,
        borderColor:'#fff'
    },
    item:{
        height:70,
        borderBottomWidth: Util.pixel,
        borderBottomColor:'#ccc'
    },
    row:{
        flexDirection: 'row'
    },
    text:{
        marginLeft:7
    },
    title:{
        fontSize:16,
        marginTop:10,
        width:Util.size.width -80
    },
    name:{
        fontSize:14,
        color: '#ccc',
        marginTop:10
    }

});

module.exports = List;
