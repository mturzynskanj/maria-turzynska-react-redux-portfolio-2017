//var add = require('./functions');

import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App.jsx'
import style from './styles/index.scss'

import fire from './firebase'

import {fromDB} from './actions/utils'

import {createStore} from 'redux'

import appReducer from './reducers'

let store = createStore(appReducer)

let db = fire.database();

fromDB(db,store.dispatch);

/*
const showState = () => {
    document.getElementById('state').innerHTML = JSON.stringify(store.getState())
}

store.subscribe(showState);
showState();

console.log('store state', store.getState())
*/

ReactDOM.render(<App  store = {store} />, document.getElementById('main'))