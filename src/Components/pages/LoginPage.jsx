import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components'
import {Wrapper, Page } from '../../styled/styledGlobal'

import LoginForm from '../forms/LoginForm.jsx';
import PropTypes from 'prop-types';
import app_firebase from '../../firebase'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this)
    }

    submit(data) {
       return  this.props.userLogin(data).then(() => this.props.history.push('./adminDashboard'))
    }

    render() {
        return (
            <Page>
                <h2>Administrator Login</h2>
                <LoginForm submit={this.submit} />
            </Page>
        );
    }
}

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
    //login: PropTypes.func.isRequired
};

export default LoginPage;