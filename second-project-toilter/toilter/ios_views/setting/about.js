import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';


class About extends Component{
    render(){
        return(
            <ScrollView style={styles.container}>
                <Text style={styles.text}>仅为模仿,写完啦,真开心😝</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    text:{
        fontSize:16,
        fontWeight:'300',
        marginBottom:15,
        marginLeft:10,
        marginTop:3
    }
});

module.exports = About;