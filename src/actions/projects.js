

import {GET_PROJECTS} from '../actionTypes'



const getProjects = (projectsList)=>{
    console.log('what is project list ', projectsList)
    return {
        type: GET_PROJECTS,
        projects: projectsList
    }
}

export default getProjects;