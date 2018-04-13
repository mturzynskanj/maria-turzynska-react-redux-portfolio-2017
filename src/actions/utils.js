
import getProjects from './projects'
import userLoggedIn from './loggedIn'
import userLoggedOut from './loggedOut'
import editedProject from './editedProject'
import api from '../api'
import _ from 'lodash'


export const getDataFromFirebase = () => (dispatch) => {
    return api.projects.get().then(projects => dispatch(getProjects(projects)));
}

export const userLogin = (credentials) => (dispatch) => {
    return api.user.login(credentials).then(user => {
        let currentUser = { email: user.email, token: user.refreshToken }
        localStorage.portfolioMT = currentUser;
        dispatch(userLoggedIn(currentUser))
    })
}

export const userLogout = () => (dispatch) => {
    return api.user.logout().then(() => {
        localStorage.removeItem('portfolioMT')
        dispatch(userLoggedOut())
    })
}

export const getProject = (name) => (dispatch) => {
    return api.project.get(name).then(project => {
        dispatch(editedProject(project))
    })
}

export const updateProject = (data) => (dispatch) => {
    console.log('===================inside updateProject....',data);
    return api.project.update({ ...data }).then(()=> dispatch(editedProject(data)))
}



