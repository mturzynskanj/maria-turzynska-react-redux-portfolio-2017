
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ProjectList from '../Components/ProjectList.jsx'
import setActiveProject from '../actions/activeProject'
import { getDataFromFirebase } from '../actions/utils'


const mapStateToProps = (state, props) => {
    return {
        projects: state.projects,
        activeProject: state.activeProject
    }
}

const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ setActiveProject, getDataFromFirebase }, dispatch)

const ConnectedProjectList = connect(mapStateToProps, mapDispatchToProps)(ProjectList)

export default ConnectedProjectList