

import {GET_PROJECTS} from '../actionTypes'



const getProjects = (projectsList)=>{
    return {
        type: GET_PROJECTS,
        projects: projectsList
    }
}