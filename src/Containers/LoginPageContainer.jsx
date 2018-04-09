import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginPage from '../Components/pages/LoginPage.jsx'

import { userLogin } from '../actions/utils'

const mapStateToProps = (state, props) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ userLogin }, dispatch)

const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginPageContainer