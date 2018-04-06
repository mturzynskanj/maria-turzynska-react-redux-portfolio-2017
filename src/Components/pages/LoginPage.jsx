import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm.jsx';

import app_firebase  from '../../firebase'




class LoginPage extends Component {
    submit(data){
        console.log('inside the submit ....',data);
        // app_firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        // .catch(function(error){
        //     console.log("Error message is", error.message);
        // })

        app_firebase.auth().signInWithEmailAndPassword(data.email, data.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }
    render() {
        return (
            <div className="page">
                <h3>Login Page ....</h3>
                <LoginForm submit={this.submit}/>
            </div>
        );
    }
}


export default LoginPage;