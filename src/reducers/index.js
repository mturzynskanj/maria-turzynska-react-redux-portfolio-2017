
import {combineReducers} from 'redux'

import activeProjectReducer from './activeProject'
import projectReducer from './projects'
import currentUserReducer from './currentUser'


const appReducer = combineReducers({
    currentUser: currentUserReducer,
    projects: projectReducer,
    activeProject: activeProjectReducer
})

export default appReducer