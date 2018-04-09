import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../Components/Header.jsx'

import { userLogin } from '../actions/utils'

const mapStateToProps = (state, props) => {
    return {
        isAuthenicated: !!state.currentUser.token
    }
}

// const mapDispatchToProps = (dispatch, props) =>
//     bindActionCreators({ userLogin }, dispatch)

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer