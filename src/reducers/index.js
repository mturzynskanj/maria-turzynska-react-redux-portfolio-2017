
import {combineReducers} from 'redux'

import activeProjectReducer from './activeProject'
import projectReducer from './projects'


const appReducer = combineReducers({
    projects: projectReducer,
    activeProject: activeProjectReducer
})

export default appReducer