import AdminPage from '../Components/pages/AdminPage.jsx';
import { getDataFromFirebase } from '../actions/utils'
import  editedProject  from '../actions/editedProject'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
    return {
        projects: state.projects,
    }
}

const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ getDataFromFirebase, editedProject }, dispatch)

const AdminPageContainer = connect(mapStateToProps, mapDispatchToProps)(AdminPage)

export default AdminPageContainer