//var add = require('./functions');

import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App.jsx'
import style from './styles/index.scss'

//import app_firebase from './firebase'

import  getDataFromFirebase  from './actions/utils'

import { createStore } from 'redux'

import appReducer from './reducers'

import middleware from './store/middleware'

import enhancer from './store'
import userLoggedIn from './actions/loggedIn';

console.log('what is middleware....', middleware);

let store = createStore(appReducer, enhancer);

// if(localStorage.portfolioMT){
//     const user = {token: localStorage.portfolioMT}
//     store.dispatch(userLoggedIn(user))
// }

//let db = app_firebase.database();


ReactDOM.render(<App store={store} />, document.getElementById('main'))