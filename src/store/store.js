import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import path from './reducer/path';
import auth from './reducer/auth';

const rootReducer = combineReducers({
    path: path,
    auth: auth,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)

export default store;