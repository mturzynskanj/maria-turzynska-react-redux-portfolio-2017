
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Logout from '../Components/Logout.jsx'

import { userLogout } from '../actions/utils'

const mapStateToProps = (state, props) => {
    return {
        isAuthenicated: !!state.currentUser.token
    }
}

const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ userLogout }, dispatch)

const LogoutContainer = connect(mapStateToProps, mapDispatchToProps)(Logout);

export default LogoutContainer;




