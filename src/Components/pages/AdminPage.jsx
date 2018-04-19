import React, { Component } from 'react'
import ProjectFormContainer from '../../Containers/ProjectFormContainer.jsx'
import { Page, Link } from '../../styled/styledGlobal'
import HiddenContent from '../HiddenContent.jsx'
import helperFunctions from '../../helperFunction'

import styled from 'styled-components'

import _ from 'lodash'

const CustomPage = styled.section`
// a {
//     border: 1px solid rgba(255,255,255, .4);
//     border-radius: 4px;
//     transition: all .3s ease-in-out;
//     @media (min-width: 768px){
//         font-size: 16px;
//         padding: 10px 20px;
//     } 
//     @media (min-width: 375px){
//         font-size: 14px;
//     }  
// }

// a:hover {
//     border: 1px solid rgba(255,255,255, 1);
// }
   
`;

const Panel = styled.section`
    margin-bottom: 20px;
`;

const Grid = styled.section`
    display: flex;
    @media (min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: no-wrap;
    }  
`;

const Title = styled.h5`
    border-top: 1px solid rgba(255, 255, 255, .6);
    font-size: 16px;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin: 10px 0; 
    padding-top: 20px;
`;

const SmlButton = styled.button`
     margin-left: 30px;
     background-color: #1E88E5;
     border-radius: 3px;
     border: 1px solid rgba(255,255, 255, .4);
     font-size: 13px;
     color: rgba(255,255, 255, .7);
     padding: 3px 8px;
     transition: all .3s ease

     &:hover {
        color: rgba(255,255, 255, 1);
     }
`;

const CustomLink = styled.a`
    border: 1px solid rgba(255,255,255, .4);
    border-radius: 4px;
    display: inline-block; 
    font-size: 14px;
    letter-spacing: 2px;
    position: relative;
    padding: 20px;
    transition: all .3s ease-in-out;

    @media (min-width: 768px){
        font-size: 16px;
        padding: 10px 20px;
    } 

    @media (min-width: 375px){
        font-size: 14px;
    }  

    &:hover {
        border: 1px solid rgba(255, 255, 255, 1);
    }

    &::before {
        content:'';
        display: none; 
        background-color: #34495e;
        position: absolute;
        bottom: 20px; 
        width: 23px;
        height: 23px;
        border-left: 1px solid rgba(255,255, 255, .6);
        border-top:  1px solid rgba(255,255, 255, .6); 
        left: 41%;
        bottom: -22px;
        transform: rotate(45deg);
    }
`;

const ActiveLink = CustomLink.extend`
    border: none;
    &::before {
        display: block; 
    }

    &:hover {
        border: none; 
    }
`;

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addPanel: { isChildVisible: false },
            updatePanel: { isChildVisible: false },
            isAddProjectActive: false,
            isUpdateProjectActive: false,
        }
        this.updateProject = this.updateProject.bind(this);
        this.openUpdatePanel = this.openUpdatePanel.bind(this)
        this.editProject = this.editProject.bind(this);
        this.projectHashtable = {};
        this.openAddPanel = this.openAddPanel.bind(this)
    }

    componentDidMount() {
        if (this.props.projects.length === 0) {
            console.log('component did Mount ', this.props.projects.length)
            this.props.getDataFromFirebase().then((pr) => console.log('pr'))
        }
    }

    updateProject() {
        // app_firebase.database().ref('projects/Celina').set({
        //   information: '....'
        // });   
    }

    openUpdatePanel() {
        event.stopPropagation();
        this.setState({ updatePanel: Object.assign({}, this.state.updatePanel, { isChildVisible: !this.state.updatePanel.isChildVisible  }) });
    }

    openAddPanel() {
        event.stopPropagation();
        this.setState({ addPanel: Object.assign({}, this.state.addPanel, { isChildVisible: !this.state.addPanel.isChildVisible }) });

    }

    editProject(name) {
        if (Object.keys(this.projectHashtable).length === 0) {
            this.projectHashtable = helperFunctions.hashtable(this.props.projects);
        }
        this.props.editedProject(helperFunctions.hashtable(this.props.projects)[name]);
    }

    render() {
        const CustomUpdateLink = this.state.updatePanel.isChildVisible ? ActiveLink : CustomLink;
        const CustomAddProjectLink = this.state.addPanel.isChildVisible ? ActiveLink: CustomLink;
        return (
            <Page>
                <h2>Administrator Page </h2>
                <CustomPage>
                    <Panel>
                        <CustomUpdateLink href="#" id="updateProjectLink" onClick={this.openUpdatePanel}>Update Project Information </CustomUpdateLink>
                        <HiddenContent isChildVisible={this.state.updatePanel.isChildVisible} ref={this.updatePanel}>
                            <Title>Projects list </Title>
                            <Grid>
                                <ul>
                                    {
                                        _.map(this.props.projects, (project, index) => {
                                            return (
                                                <li key={project.name} >{project.shortName}  <SmlButton onClick={this.editProject.bind(this, project.shortName)}>Edit</SmlButton></li>
                                            )
                                        })
                                    }
                                </ul>

                                <ProjectFormContainer />
                            </Grid>
                        </HiddenContent>
                    </Panel>
                    <Panel>
                        <CustomAddProjectLink id="addProjectLink" onClick={this.openAddPanel}>Add Project </CustomAddProjectLink>
                        <HiddenContent isChildVisible={this.state.addPanel.isChildVisible} ref={this.addPanel} >
                            <Title>Project Data </Title>
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