import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm.jsx';
import PropTypes from 'prop-types';


import app_firebase  from '../../firebase'




class LoginPage extends Component {
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this)
    }
    submit(data){
        console.log('inside the submit ....',data);
        // app_firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        // .catch(function(error){
        //     console.log("Error message is", error.message);
        // })

        app_firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then((result)=> console.log('logged in ....',result,  this.props.history.push('./admin')))
        .then(()=>{
            app_firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
                console.log('what is the idToken', idToken);
              }).catch(function(error) {
                // Handle error
              });
        })
        .catch(function(error) {
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

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
    //login: PropTypes.func.isRequired
};


export default LoginPage;