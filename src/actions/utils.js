
import getProjects from './projects'
import userLoggedIn from './loggedIn'
import userLoggedOut from './loggedOut'
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

export const userLogout = ()=>(dispatch)=> {
    return api.user.logout().then(()=> {
        localStorage.removeItem('portfolioMT')
        dispatch(userLoggedOut())
    })
}



