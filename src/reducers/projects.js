
import {GET_PROJECTS} from '../actionTypes'

export default function projectReducer(state=[], action){
    const{type} = action
    if(type === "GET_PROJECTS"){
        return [...state, ...action.projects]
    }

    return state;
}

