import React, { Component } from 'react';
import styled from 'styled-components'

import Login from './Login.jsx'
import Logout from './Logout.jsx'

const LoginBarContainer = styled.div`
    display:flex;
    justify-content: flex-end;
    padding: 10px 20px;
    min-height: 40px;
    
    a {
        border: 1px solid rgba(255,255,255, .4);
        border-radius: 4px;
        transition: all .3s ease-in-out;
        display: inline-block;
        @media (min-width: 768px){
            font-size: 16px;
            padding: 2px 15px;
        } 
        @media (min-width: 375px){
            font-size: 14px;
            padding: 2px 10px;
        }  
    }

    a:hover {
        border: 1px solid rgba(255,255,255, 1);
    }
`;

class LoginBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isAuthenicated, userLogout, ...rest } = this.props;
        return (
            <LoginBarContainer>
                {isAuthenicated ? <Logout {...rest} userLogout={userLogout} /> : <Login />}
            </LoginBarContainer>
        );
    }
}

export default LoginBar;
