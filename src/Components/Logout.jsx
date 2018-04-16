import React, { Component } from 'react';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const {userLogout, ...rest} = this.props;
        userLogout().then(() => rest.history.push('/'));
    }

    render() {
        return (
            <a onClick={this.handleClick}>Logout</a>
        )
    }
}

export default Logout;