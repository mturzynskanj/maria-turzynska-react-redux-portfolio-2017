
import thunkMiddleware from 'redux-thunk'

import { applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));

export default middleware