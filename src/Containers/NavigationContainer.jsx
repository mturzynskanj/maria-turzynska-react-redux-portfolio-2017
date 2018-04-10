import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Navigation from '../Components/Navigation.jsx'

const mapStateToProps = (state, props) => {
    return {
        isAuthenicated: !!state.currentUser.token
    }
}

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;