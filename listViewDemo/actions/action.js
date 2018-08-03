/**
 */
import * as ACTION from './ACTIONS';

let changeLoadingStatusToNumber = () => {
    return dispatch => {
        return dispatch({
            type: ACTION.LIST_DATA_DONE,
            data:['1', '2', '3'],
        })
    }
};

let changeLoadingStatusToEnglish = () => {
    return dispatch => {
        return dispatch({
            type: ACTION.LIST_DATA_DONE,
            data:['one', 'two', 'three'],
        })
    }
};

let changeLoadingStatusToChinese = () => {
    return dispatch => {
        return dispatch({
            type: ACTION.LIST_DATA_DONE,
            data:['一', '二', '三'],
        })
    }
};

const travellerListUrl = 'https://api.tuniu.com/members/user/contact/getList?';
const invoiceListUrl = 'https://api.tuniu.com/members/user/contact/getInvoiceInfoByPage?';
const addressListUrl ='https://api.tuniu.com/members/points/receipt/getAddressByPage?';

let getTravelerList = () => {
    return dispatch => {
        let fetchUrl= travellerListUrl;
        let params = {
            page: 1,
            size: 20,
            sessionId: '848717718c63552bcbfe63e64b9f8b6c'
        }

        fetchDataByUrlAndParams(fetchUrl,params).then(function(result){
            console.log(result.data.contacters)
            return dispatch({
                type: ACTION.LIST_DATA_DONE,
                data:result.data.contacters,
            })
        })
    }
}

let getinvoiceList = () => {
    return dispatch => {
        let fetchUrl= invoiceListUrl;
        let params = {
            page: 1,
            size: 20,
            sessionId: '848717718c63552bcbfe63e64b9f8b6c'
        }

        fetchDataByUrlAndParams(fetchUrl,params).then(function(result){
            console.log(result.data.items)
            return dispatch({
                type: ACTION.LIST_DATA_DONE,
                data:result.data.items,
            })
        })
    }
}

let getAddressList = () => {
    return dispatch => {
        let fetchUrl= addressListUrl;
        let params = {
            page: 1,
            size: 20,
            sessionId: '848717718c63552bcbfe63e64b9f8b6c',
            iosId:1
        }

        fetchDataByUrlAndParams(fetchUrl,params).then(function(result){
            console.log(result.data.list)
            return dispatch({
                type: ACTION.LIST_DATA_DONE,
                data:result.data.list,
            })
        })
    }
}


function fetchDataByUrlAndParams (fetchUrl,params) {
    let c = {
        cc:'2500',
        ct:'10',
        p:14588,
        ov:15,
        dt:0,
        v:'9.0.7'}

    fetchUrl+= 'c='+encodeURI(JSON.stringify(c));
    fetchUrl+='&d='+encodeURI(JSON.stringify(params));
    const requestParams={
        method: 'GET',
        header: {'Content-Type': 'application/json; charset=utf-8',
            'sid': '0096AA62-DE85-4C61-A6DB-4EEE20412FAA',
            'sessionId':'848717718c63552bcbfe63e64b9f8b6c'
        }
    }
    return fetch(fetchUrl, requestParams)
        .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                }
            }
        )
        .catch((error) => console.log(error))
}


export {
    changeLoadingStatusToNumber,
    changeLoadingStatusToEnglish,
    changeLoadingStatusToChinese,
    getTravelerList,
    getinvoiceList,
    getAddressList,
};