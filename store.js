import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './src/Reducers/reducers'

const middleware = applyMiddleware(thunkMiddleware)
export default store = createStore(reducer, middleware)

