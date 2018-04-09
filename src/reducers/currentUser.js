import { USER_LOGGED_IN } from '../actionTypes'
import { USER_LOGGED_OUT } from '../actionTypes'

function currentUserReducer(state = {}, action) {
    const { currentUser } = action;
    switch (action.type) {
        case USER_LOGGED_IN: {
            return { ...state, ...currentUser }
        }
        case USER_LOGGED_OUT: {
            return {}
        }
        default:
            return state;
    }
};

export default currentUserReducer;