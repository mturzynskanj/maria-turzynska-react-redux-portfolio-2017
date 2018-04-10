import React from 'react'
import PropTypes from 'prop-types';
import { Route , Redirect } from 'react-router-dom'
import {connect } from 'react-redux'


const AdminRoute = ({isAuthenticated,  component: Component, ...rest }) => (
    <Route {...rest} render={(props) => isAuthenticated ?  <Component {...props} /> : <Redirect to='/' />} />
);

function mapStateToProps(state){
    return {
        isAuthenticated: !!state.currentUser.token
    }
}



// AdminRoute.propTypes = {
//     component: PropTypes.func.isRequired
// }



export default connect(mapStateToProps)(AdminRoute);