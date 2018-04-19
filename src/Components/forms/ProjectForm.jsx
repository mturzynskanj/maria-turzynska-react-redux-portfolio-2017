import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validator from 'validator'
import { Form, Button, FormWrapper, FieldSet, Input } from '../../styled/styledForms'
import { Page } from '../../styled/styledGlobal'
import { updateProject } from '../../actions/utils'
import InlineError from '../messages/InlineError.jsx'

import firebase_app from '../../firebase'

class ProjectForm extends Component {


    constructor(props) {
        console.log('Project Form==', props);
        super(props);
        this.state = {
            data: {
                id: '',
                shortName: '',
                image: '',
                information: '',
                name: '',
                url: ''
            },
            loading: false,
            errors: {},
            globalErrors: ''

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmitUpdates = this.onSubmitUpdates.bind(this);
        this.validate = this.validate.bind(this);
        this.uploadToFirebase = this.uploadToFirebase.bind(this);
    }

    componentDidMount() {
        let editedProject = this.props.editedProject;
        Object.keys(editedProject) &&
            this.setState({
                id: editedProject.id,
                shortName: editedProject.shortName,
                image: editedProject.image,
                information: editedProject.information,
                name: editedProject.name,
                url: editedProject.url
            });

        console.log('this.state.data---', this.state.data);
    }

    componentWillReceiveProps(nextProps) {
        let ep = nextProps.editedProject;
        this.setState(prevState => ({
            data: {
                ...prevState.data, ...nextProps.editedProject
            }
        }))
        console.log('this.state', this.state.data)
    }

    onChange(e) {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        })
        const errors = this.validate(this.state.data);
        this.setState({ errors });
    }

    uploadToFirebase(e) {
        console.log('e000000', e.target.files);
        let file = e.target.files[0];
        let rootRef = firebase_app.storage().ref();
        
        let imageRef = rootRef.child(`images/${file.name}`);
        imageRef.put(file)
            .then(res => this.setState({
                data: { ...this.state.data, image: res.downloadURL }
            }))
            .catch (err=> console.log('error.....while loading the file '))
    }

    onSubmitUpdates(e) {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.props.updateProject(this.state.data).then(() => this.props.updateProjects(this.state.data))
        }
    }

    validate(data) {
        const errors = {};
        if (!data.id) errors.id = "Can't be blank";
        if (!data.shortName) errors.shortName = "Can't be blank";
        if (!data.image) errors.image = "Can't be blank";
        if (!data.name) errors.name = "Can't be blank";
        if (!data.url) errors.url = "Can't be blank";
        if (!data.information) errors.information = "Can't be blank";
        return errors;
    }

    render() {
        const { data, errors, globalErrors, loading } = this.state;
        return (
            <Form onSubmit={this.onSubmitUpdates} enctype="multipart/form-data" >
                {loading && <p>Loading...</p>}
                {errors.global && <InlineError text={errors.global} />}

                <FieldSet>
                    <label htmlFor="id">Project Id</label>
                    <Input
                        type="text"
                        name="id"
                        placeholder="enter integer "
                        value={data.id}
                        onChange={this.onChange}
                    />
                    {errors.id && <InlineError text={errors.id} />}
                </FieldSet>

                <FieldSet>
                    <label htmlFor="shortName">ShortName</label>
                    <Input
                        type="text"
                        id="shortName"
                        name="shortName"
                        placeholder="shortName"
                        value={data.shortName}
                        onChange={this.onChange}
                    />
                    {errors.shortName && <InlineError text={errors.shortName} />}
                </FieldSet>

                <FieldSet>
                    <label htmlFor="Image">Image</label>
                    <Input
                        type="text"
                        id="image"
                        name="image"
                        placeholder=".png or jpg"
                        value={data.image}
                        onChange={this.onChange}
                    />
                    {errors.image && <InlineError text={errors.image} />}
                </FieldSet>
                <FieldSet>
                    <label htmlFor="Upload image">Upload Image </label>
                    <Input
                        type="file"
                        id="uploadImage"
                        name="uploadImage"
                        onChange={(files) => this.uploadToFirebase(files)}
                    />
                </FieldSet>

                <FieldSet>
                    <label htmlFor="name">Name</label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="name"
                        value={data.name}
                        onChange={this.onChange}
                    />
                    {errors.name && <InlineError text={errors.name} />}
                </FieldSet>
                <FieldSet>
                    <label htmlFor="url">Url</label>
                    <Input
                        type="text"
                        id="url"
                        name="url"
                        placeholder="url"
                        value={data.url}
                        onChange={this.onChange}
                    />
                    {errors.url && <InlineError text={errors.url} />}
                </FieldSet>
                <FieldSet>
                    <label htmlFor="information">information</label>
                    <Input
                        type="text"
                        id="information"
                        name="information"
                        placeholder="information"
                        value={data.information}
                        onChange={this.onChange}
                    />
                    {errors.information && <InlineError text={errors.information} />}
                </FieldSet>
                <Button primary>Submit Project</Button>
            </Form>
        );
    }
}

ProjectForm.propTypes = {
    // submit: PropTypes.func.isRequired
};

export default ProjectForm;