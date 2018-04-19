import { EDITED_PROJECT } from '../actionTypes'

const INITIAL_STATE = {};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
function editedProjectReducer(state = INITIAL_STATE, action) {
    const {type, ...payload} = action;
    switch (action.type) {
        case EDITED_PROJECT:
            return {
                ...state,
                ...payload.editedProject
            };
        default: return state;
    }
};

export default editedProjectReducer;