
import React from 'react'
import ProjectItem from './ProjectItem.jsx'
import _ from 'lodash'

// const ProjectList = ({ projects, activeProject, setActiveProject, getDataFromFirebase}) => {

//     return (
//         <div id='projects'>
//             <ul id='project_list'>
//                 {
//                     _.map(projects, (project, index) => {
//                         return (
//                             <ProjectItem key={index} {...project} activeProject={activeProject} setActiveProject={setActiveProject} />
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }

// export default ProjectList 


class ProjectList extends React.Component {
    constructor(props) {
        console.log('what are props', props);
        super(props)
    }

    componentDidMount() {
        //if(this.props.projects.length === 0) {
            this.props.projects.length === 0 && this.props.getDataFromFirebase() 
       // }    
    }
    render() {
        return (
            <div id='projects'>
                <ul id='project_list'>
                    {
                        _.map(this.props.projects, (project, index) => {
                            return (
                                <ProjectItem key={project.shortName} {...project} {...this.props} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}

export default ProjectList;