
import {SET_ACTIVE_PROJECT} from '../actionTypes'

const setActiveProject = (projectid=1)=>{
    return {
        type: SET_ACTIVE_PROJECT,
        projectid
    }  
}

export default setActiveProject