
import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css";

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import HomePage from './pages/Home.jsx'
import Resume from './pages/Resume.jsx'
import Navigation from './Navigation.jsx'
import NavigationContainer from '../Containers/NavigationContainer.jsx'
import AboutThisSite from './pages/AboutThisSite.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Portfolio from './pages/Portfolio.jsx'
import LoginPageContainer from '../Containers/LoginPageContainer.jsx'
import LoginBarContainer from '../Containers/LoginBarContainer.jsx'
import AdminPageContainer from '../Containers/AdminPageContainer.jsx'
import AdminRoute from './routes/AdminRoute.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { Wrapper } from '../styled/styledGlobal'





const App = ({ store }) =>
    <Provider store={store} >
        <BrowserRouter>
            <Wrapper>
                <Route exact path='/' component={Header} />
                <Route exact path='/login' component={Header} />
                <Route exact path='/aboutThisSite' component={NavigationContainer} />
                <Route path='/aboutMe' component={NavigationContainer} />
                <Route path='/resume' component={NavigationContainer} />
                <Route path='/portfolio' component={NavigationContainer} />
                <Route exact path='/adminDashboard' component={NavigationContainer} />
                <Route path='/' component={LoginBarContainer} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/login' component={LoginPageContainer} />
                    <AdminRoute exact path='/adminDashboard' component={AdminPageContainer} />
                    <Route exact path='/aboutThisSite' component={AboutThisSite} />
                    <Route path="/aboutMe" component={AboutMe} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/portfolio" component={Portfolio} />
                </Switch>
                <Route path='/' component={Footer} />

            </Wrapper>
        </BrowserRouter>
    </Provider>

export default App