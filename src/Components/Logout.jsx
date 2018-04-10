import React, { Component } from 'react';

class Logout extends Component {
    constructor(props) {
        super(props);
      
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const {userLogout, ...rest} = this.props;
        console.log('what is rest ...', rest);
        userLogout().then(() => rest.history.push('/'));
    }

    render() {
        return (
            <button onClick={this.handleClick}>Logout</button>
        )
    }
}

export default Logout;