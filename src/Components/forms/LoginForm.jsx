
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validator from 'validator'

import InlineError from '../messages/InlineError.jsx'

import styled from 'styled-components'
import { Form, Button, FormWrapper, FieldSet, Input} from '../../styled/styledForms'


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                email: '',
                password: ''
            },
            loading: false,
            errors: {},
            globalErrors: ''

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

    onSubmit(e) {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true })
            this.props.submit(this.state.data)
                .catch(err => this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        'global': err.message
                    },
                    loading: false
                })))
        }
    }

    validate(data) {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Can't be blank";
        return errors;

    }

    render() {
        const { data, errors, globalErrors, loading } = this.state;
        return (
            <FormWrapper>
                <Form onSubmit={this.onSubmit}>
                    {loading && <p>Loading...</p>}
                    {errors.global && <InlineError text={errors.global} />}
                  
                    <FieldSet>
                        <label htmlFor="email">Email</label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@example.com"
                            value={data.email}
                            onChange={this.onChange}
                            myerror = {!!errors.email}
                        />
                        {errors.email && <InlineError text={errors.email} />}
                    </FieldSet>
                    <FieldSet>
                        <label htmlFor="password">Password</label>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            value={data.password}
                            onChange={this.onChange}
                            myerror = {!!errors.password}
                        />
                        {errors.password && <InlineError text={errors.password} />}
                    </FieldSet>
                    <Button primary>Login</Button>
                </Form>
            </FormWrapper>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;