import React, { Component } from 'react';

const  Logout = ({userLogout})=> {
        console.log('user loggin out....', userLogout);
        return (
            <button onClick={userLogout}>Logout</button>
        );
    }

export default Logout;