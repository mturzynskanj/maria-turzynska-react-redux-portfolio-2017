
import React from 'react'
import ReactDOM from 'react-dom'

import Header       from './Header.jsx'
import Footer       from './Footer.jsx'
import HomePage     from './pages/Home.jsx'
import Resume       from './pages/Resume.jsx'
import Navigation   from './Navigation.jsx'
import AboutThisSite from './pages/AboutThisSite.jsx'
import AboutMe    from './pages/AboutMe.jsx'
import Portfolio  from './pages/Portfolio.jsx'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch } from 'react-router-dom'


const App=({store})=>
    <Provider store={store} >
        <BrowserRouter>
            <div className="main-content">
                    <Route exact path="/" component = {Header} />
                    <Route exact path='/aboutThisSite' component = {Navigation} />
                    <Route path='/aboutMe' component = {Navigation} />
                    <Route path='/resume'  component = {Navigation} />
                    <Route path='/portfolio' component={Navigation} />
                <Switch>
                    <Route exact path = '/' component = {HomePage} />
                    <Route exact path = '/aboutThisSite'  component = {AboutThisSite} />
                    <Route path = "/aboutMe" component = {AboutMe}  />
                    <Route path = "/resume"  component = {Resume} />
                    <Route path = "/portfolio" component = {Portfolio} />          
                </Switch> 
                <Route path ='/' component = {Footer} />    
                    
            </div>
        </BrowserRouter>
    </Provider>

export default App