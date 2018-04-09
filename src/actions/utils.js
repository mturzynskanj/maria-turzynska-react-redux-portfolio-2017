
import { GET_PROJECTS } from '../actionTypes'
import getProjects from './projects'
import userLoggedIn from './currentUser'
import api from '../api'
import _ from 'lodash'


export const getDataFromFirebase = () => (dispatch) => {
    return api.projects.get().then(projects => dispatch(getProjects(projects)));
}


export const userLogin = (credentials) => (dispatch) => {
    return api.user.login(credentials).then(user => dispatch(userLoggedIn(user)))
}



