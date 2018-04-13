import ProjectForm from '../Components/forms/ProjectForm.jsx';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateProject } from '../actions/utils'
import updateProjects from '../actions/updateProjects'

import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, props) => {
    return {
        editedProject: state.editedProject
    }
}

const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ updateProject, updateProjects }, dispatch)

const ProjectFormContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectForm))

export default ProjectFormContainer