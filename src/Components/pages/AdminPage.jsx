import React, { Component } from 'react'
import ProjectFormContainer from '../../Containers/ProjectFormContainer.jsx'
import { Page, Link } from '../../styled/styledGlobal'
import HiddenContent from '../HiddenContent.jsx'
import helperFunctions from '../../helperFunction'

import styled from 'styled-components'

import _ from 'lodash'

const CustomPage = styled.section`
a {
    border: 1px solid rgba(255,255,255, .4);
    border-radius: 4px;
    transition: all .3s ease-in-out;
    @media (min-width: 768px){
        font-size: 16px;
        padding: 10px 20px;
    } 
    @media (min-width: 375px){
        font-size: 14px;
    }  
}

a:hover {
    border: 1px solid rgba(255,255,255, 1);
}
   
`;

const Panel = styled.section`
    margin-bottom: 20px;
`;

const Title = styled.h5`
    font-size: 16px;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin: 20px 0; 

`;


class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addPanel: { isChildVisible: false },
            updatePanel: { isChildVisible: false }
        }
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
    }

    render() {
        return (
            <Page>
                <h2>Administrator Page </h2>
                <CustomPage>
                    <Panel>
                        <a href="#" onClick={this.openUpdatePanel}>Update Project Information </a>
                        <HiddenContent isChildVisible={this.state.updatePanel.isChildVisible} ref={this.updatePanel}>
                            <Title>Projects list </Title>
                            <div className="flex-container">
                                <ul>                                   
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
                    </Panel>
                    <Panel>
                        <a onClick={this.openAddPanel}>Add Project </a>
                        <HiddenContent isChildVisible={this.state.addPanel.isChildVisible} ref={this.addPanel} >
                            <Title>Add Project </Title>
                            <div className="flex-container">
                                <ProjectFormContainer />
                            </div>
                        </HiddenContent>
                    </Panel>
                </CustomPage>
            </Page>
        );
    }
}

export default AdminPage;