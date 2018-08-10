/**
 */
import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "./actions/action";

import {
    AppRegistry,
    StyleSheet,
    Text,
    ListView,
    View,
    TouchableWithoutFeedback,
    TouchableHighlight,
} from 'react-native';

export default class ListViewDemo extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            index: 0,
            buttonDataSource: ds.cloneWithRows(rowButtonDatas)
        };

        this.dataSource = ds.cloneWithRows(props.listData)
    }


    componentWillReceiveProps(props) {
        let data = props;
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource = ds.cloneWithRows(props.listData);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    ListViewDemo
                </Text>
                <View style={{backgroundColor:'#999999',height:1}}>
                </View>
                <ListView style={ {backgroundColor:'white'}}
                          ref="listview"
                          horizontal={true}
                          dataSource={this.state.buttonDataSource}
                          renderRow={(rowData,sectionId,rowId) => {return this._renderButtonRow(rowData,rowId)}}
                />

                <View style={{backgroundColor:'#999999',height:1}}>
                </View>

                <ListView style={styles.contentContainer}
                          dataSource={this.dataSource}
                          renderRow={(rowData) => {return this._renderRow(rowData)}}
                />
            </View>
        );
    }

    _buttonPress(rowId) {
        let props = this.props;
        switch (rowId) {
            case "0":
                props.actions.getTravelerList();
                break;
            case "1":
                props.actions.getinvoiceList();
                break;
            case "2":
                props.actions.getAddressList();
                break;
            default:
                break;

        }


        var rowDataIndex = rowId;
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        for (var i = 0; i < rowButtonDatas.length; i++) {
            rowButtonDatas[i].isSelected = (i === parseInt(rowId))
        }

        this.setState({
            index: 1,
            buttonDataSource: ds.cloneWithRows(rowButtonDatas),
        });
    }

    _renderButtonRow(rowData, rowId) {
        let textColor = (rowData.isSelected) ? 'green' : 'black';
        let lineColor = (rowData.isSelected) ? 'green' : 'white';
        return (
            <View style={{ height:40,}}>
                <TouchableWithoutFeedback
                    onPress={ () => {this._buttonPress(rowId)} }>
                    <View style={ {justifyContent:'center',
                                   height:38,
                                   width:130, }}>
                        <Text style={ {textAlign:'center',
                                   fontSize:16,
                                   color:textColor} }>
                            {rowData.name}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{backgroundColor:lineColor,height:12}}>
                </View>
            </View>
        );
    }

    _renderRow(rowData) {
        let titleStr = "无可用数据"
        if(rowData.invoiceTitle){
            titleStr = rowData.invoiceTitle
        } else if (rowData.userName){
            titleStr = rowData.userName
        } else if (rowData.name){
            titleStr = rowData.name
        } else {
            titleStr = rowData;
        }
        return (
            <View style={ {backgroundColor:'white',
                            height:40 } }>
                <View style={{flexDirection:'column',
                               justifyContent:'center',
                               height:39, }}>
                    <Text style={ {  textAlign:'center',
                                    color:'#666666'} }>
                        {titleStr}
                    </Text>
                </View>

                <View style={{backgroundColor:'#999999',height:1}}>
                </View>
            </View>
        );
    }
}

const rowDatas = [['第一个', '第二个', '第三个'],
    ['One', 'Two', 'Three'],
    ['1', '2', '3']];

rowButtonDatas = [{name:'中文顺序', isSelected:true},
    {name:'英文顺序', isSelected:false},
    {name:'阿拉伯顺序', isSelected:false}];

const styles = StyleSheet.create({
    container: {},
    header: {
        textAlign: 'center',
        marginTop: 30,
        height: 44,
        color: '#333333',
        fontSize: 16,
        justifyContent: 'center'
    },

    contentContainer: {
        marginTop: 0,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

let dumbComponent = connect(state => ({
    listData: state.listData,
}), dispatch => ({
    actions: bindActionCreators(actions, dispatch)
}))(ListViewDemo);

module.exports = dumbComponent;