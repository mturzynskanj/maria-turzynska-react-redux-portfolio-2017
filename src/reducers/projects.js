
import { GET_PROJECTS, UPDATE_PROJECTS } from '../actionTypes'

export default function projectReducer(state = [], action) {
    const { type } = action
    if (type === "GET_PROJECTS") {
        return [...state, ...action.projects]
    }

    switch (type) {
        case GET_PROJECTS:
            return [...state, ...action.projects]

        case UPDATE_PROJECTS:
            const { updatedProject } = action;
            //console.log('?????????????????????updatedProject', updatedProject  , state[0]);
            return state.map((oldProject) => 
                oldProject.shortName === updatedProject.shortName
                    ? {
                        ...oldProject,
                       ...updatedProject
                    }
                    : {...oldProject}
            )
            //return state;
    }

    return state;
}

