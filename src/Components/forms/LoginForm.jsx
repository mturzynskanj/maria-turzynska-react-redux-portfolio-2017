
import React, { Component } from 'react';
import { Form, Button } from "semantic-ui-react";
import PropTypes from 'prop-types';



import Validator from 'validator'

import InlineError from '../messages/InlineError.jsx'


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                email: '',
                password: ''
            },
            loading: false,
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }
    onChange(e) {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        })
        const errors = this.validate(this.state.data);
        this.setState({ errors });
    }

    onSubmit() {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if(Object.keys(errors).length === 0){
            this.props.submit(this.state.data);
        }
    }

    validate(data) {
        console.log('inside validate', data);
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Can't be blank";
        return errors;

    }

    render() {
        const { data, errors } = this.state;
        return (
            <div className="ui container">
                <Form onSubmit={this.onSubmit}>
                    <Form.Field error={!!errors.email}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@example.com"
                            value={data.email}
                            onChange={this.onChange}
                        />
                        {errors.email && <InlineError text={errors.email} />}
                    </Form.Field>
                    <Form.Field error={!!errors.password}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            value={data.password}
                            onChange={this.onChange}
                        />
                        {errors.password && <InlineError text={errors.password} />}
                    </Form.Field>
                    <Button primary>Login...</Button>
                </Form>

            </div>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;