import React, { Component } from 'react'

import ProjectFormContainer from '../../Containers/ProjectFormContainer.jsx'
import HiddenContent from '../HiddenContent.jsx'
import helperFunctions from '../../helperFunction'

import _ from 'lodash'


class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addPanel: { isChildVisible: false },
            updatePanel: { isChildVisible: false }
        }
        this.updatePanel = React.createRef();
        this.addPanel = React.createRef();
        //const { projects, getDataFromFirebase } = this.props
        this.updateProject = this.updateProject.bind(this);
        this.openUpdatePanel = this.openUpdatePanel.bind(this)
        this.editProject = this.editProject.bind(this);
        this.projectHashtable = {};
        this.openAddPanel = this.openAddPanel.bind(this)
    }

    componentDidMount() {
        console.log('componentDidMount   this props.products', this.props.projects);
        if (this.props.projects.length === 0) {
            console.log('component did Mount ', this.props.projects.length)
            this.props.getDataFromFirebase().then((pr) => console.log('pr'))
        }
    }

    updateProject() {
        alert('inside update project....');
        // app_firebase.database().ref('projects/Celina').set({
        //   information: '....'
        // });   
    }

    openUpdatePanel() {
        event.stopPropagation();
        /// this.setState({ isChildVisible: !this.state.isChildVisible })
        this.setState({ updatePanel: Object.assign({}, this.state.updatePanel, { isChildVisible: !this.state.updatePanel.isChildVisible }) });
    }

    openAddPanel() {
        event.stopPropagation();
       // this.setState(addPanel, ...{ isChildVisible: !this.state.isChildVisible })
        this.setState({ addPanel: Object.assign({}, this.state.addPanel, { isChildVisible: !this.state.addPanel.isChildVisible }) });

    }

    editProject(name) {
        if (Object.keys(this.projectHashtable).length === 0) {
            this.projectHashtable = helperFunctions.hashtable(this.props.projects);
        }

        this.props.editedProject(helperFunctions.hashtable(this.props.projects)[name]);
        console.log('to be edited....', helperFunctions.hashtable(this.props.projects)[name]);
    }

    render() {
        return (
            <div className="page">
                <h2>Administrator Page </h2>
                <div>
                    <button onClick={this.openUpdatePanel}>Update Project Information </button>
                    <HiddenContent isChildVisible={this.state.updatePanel.isChildVisible} ref={this.updatePanel}>
                        <div className="flex-container">
                            <ul>
                                <h5>Project list .... </h5>
                                {
                                    _.map(this.props.projects, (project, index) => {
                                        return (
                                            <li key={project.name} >{project.shortName}  <button onClick={this.editProject.bind(this, project.shortName)}>Edit</button></li>
                                        )
                                    })
                                }
                            </ul>
                            <ProjectFormContainer />
                        </div>
                    </HiddenContent>
                </div>
                <button onClick={this.openAddPanel}>Add Project </button>
                <HiddenContent isChildVisible={this.state.addPanel.isChildVisible} ref={this.addPanel} >
                    <h6>Add Project </h6>
                    <div className="flex-container">
                        <ProjectFormContainer />
                    </div>
                </HiddenContent>
            </div>
        );
    }
}

export default AdminPage;