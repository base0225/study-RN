/**
 * Created by zhujia on 2017/2/20.
 */
/***
 *
 * Util模块 React Native module
 * 主要提供工具方法
 * **/

import Dimensions from 'Dimensions';
import React,{ Component } from 'react';
import {
     PixelRatio, 
     ActivityIndicatorIOS
  } from 'react-native';

module.exports = {
   navigationHeight: 44,

    size:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    pixel: 1 / PixelRatio.get(),

    /**
     * 基于fetch的get方法
     * */
    get: function (url, successCallback, failCallback) {
        fetch(url)
            .then((response) => response.text())
            .then((responseText) =>{
                successCallback(JSON.parse(responseText));
            })
            .catch(function(err){
               failCallback(err);
            });
    },

}