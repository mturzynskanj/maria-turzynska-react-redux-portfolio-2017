//var add = require('./functions');

import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App.jsx'
import style from './styles/index.scss'

import app_firebase from './firebase'

import { fromDB } from './actions/utils'

import { createStore } from 'redux'

import appReducer from './reducers'

import middleware from './store/middleware'

let store = createStore(appReducer, middleware);

let db = app_firebase.database();

fromDB(db, store.dispatch);

/*
const showState = () => {
    document.getElementById('state').innerHTML = JSON.stringify(store.getState())
}

store.subscribe(showState);
showState();

console.log('store state', store.getState())
*/

ReactDOM.render(<App store={store} />, document.getElementById('main'))