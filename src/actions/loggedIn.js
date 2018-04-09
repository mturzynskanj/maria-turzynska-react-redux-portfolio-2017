import { USER_LOGGED_IN } from '../actionTypes'


const userLoggedIn = (currentUser = {}) => {
    console.log('currentUser', currentUser);
    return {
        type: USER_LOGGED_IN,
        currentUser
    }
}

export default userLoggedIn