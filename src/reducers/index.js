
import {combineReducers} from 'redux'

import activeProjectReducer from './activeProject'
import projectReducer from './projects'
import currentUserReducer from './currentUser'
import editedProject from './editedProject';
import editedProjectReducer from './editedProject';


const appReducer = combineReducers({
    currentUser: currentUserReducer,
    projects: projectReducer,
    activeProject: activeProjectReducer,
    editedProject: editedProjectReducer
    
})

export default appReducer