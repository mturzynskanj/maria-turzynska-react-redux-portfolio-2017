
import {SET_ACTIVE_PROJECT} from '../actionTypes'

export default function activeProjectReducer (state=14,action){
    switch(action.type){
        case SET_ACTIVE_PROJECT:{
            return action.projectid
        }
        default:
            return state
    }
}