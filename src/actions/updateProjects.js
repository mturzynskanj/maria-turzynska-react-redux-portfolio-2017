import { UPDATE_PROJECTS } from '../actionTypes'

const updateProjects = (updatedProject = {}) => {
    console.log('inside edited actions', updatedProject);
    return {
        type: UPDATE_PROJECTS,
        updatedProject
    }
}

export default updateProjects 