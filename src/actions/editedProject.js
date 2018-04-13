import { EDITED_PROJECT } from '../actionTypes'

const editedProject = (editedProject = {}) => {
    console.log('inside edited actions', editedProject);
    return {
        type: EDITED_PROJECT,
        editedProject
    }
}

export default editedProject 