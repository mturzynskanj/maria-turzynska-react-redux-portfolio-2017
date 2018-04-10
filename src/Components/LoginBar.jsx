import React, { Component } from 'react';

import Login from './Login.jsx'
import Logout from './Logout.jsx'

class LoginBar extends React.Component {
    constructor(props) {
        super(props);
        // console.log('Inside Login bar ----', rest);
    }

    render() {
        const { isAuthenicated, userLogout, ...rest } = this.props;
        console.log('what is userLogout===', userLogout);
        console.log('isAuthenicated===', isAuthenicated);
        return (
            <div className="bar">
                {isAuthenicated ? <Logout {...rest} userLogout={userLogout} /> : <Login />}
            </div>
        );
    }
}

export default LoginBar;
