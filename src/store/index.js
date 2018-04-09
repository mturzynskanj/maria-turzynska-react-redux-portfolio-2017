
import middleware from './middleware'
import { compose } from 'redux'

const enhancer = compose(
    middleware
)

export default enhancer;