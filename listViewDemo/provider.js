/**
 */
import React, {Component} from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';
import {Provider} from 'react-redux';
import ListViewDemo from './listViewDemo';

class ListViewDemoProvider extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
        const store = createStoreWithMiddleware(reducer);

        return (
            <Provider store={ store }>
                <ListViewDemo {...this.props}></ListViewDemo>
            </Provider>
        )
    }
};

module.exports = ListViewDemoProvider;