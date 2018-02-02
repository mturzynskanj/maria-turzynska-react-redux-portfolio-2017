
import React from 'react'

import ProjectItem from './ProjectItem.jsx'



import _ from 'lodash'

const ProjectList = ({ projects, activeProject, setActiveProject }) => {
    return (
        <div id='projects'>
            <ul id='project_list'>
                {
                    _.map(projects, (project, index) => {
                        return (
                            <ProjectItem key={project.name} {...project} activeProject={activeProject} setActiveProject={setActiveProject} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ProjectList 