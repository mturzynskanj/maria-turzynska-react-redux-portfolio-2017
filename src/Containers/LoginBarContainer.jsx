import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginBar from '../Components/LoginBar.jsx'

import { userLogout } from '../actions/utils'

const mapStateToProps = (state, props) => {
    return {
        isAuthenicated: !!state.currentUser.token
    }
}

const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ userLogout }, dispatch)

const LoginBarContainer = connect(mapStateToProps,mapDispatchToProps)(LoginBar);

export default LoginBarContainer