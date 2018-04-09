import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm.jsx';
import PropTypes from 'prop-types';

import app_firebase from '../../firebase'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this)
    }

    submit(data) {
       return  this.props.userLogin(data).then(() => this.props.history.push('./admin'))
    }

    render() {
        return (
            <div className="page">
                <h3>Login Page ....</h3>
                <LoginForm submit={this.submit} />
            </div>
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