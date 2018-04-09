import { USER_LOGGED_IN } from '../actionTypes'

function currentUserReducer(state={}, action){
   // console.log('action....', );
   let currentUser = action.currentUser;
 
    switch(action.type){
        case USER_LOGGED_IN:{
            let user = {email: currentUser.email, token: currentUser.refreshToken};
            console.log('current User', currentUser.email, currentUser.refreshToken)
            return Object.assign({}, ...state, {user})
        }
        default: 
            return state;
    }
};

export default currentUserReducer;