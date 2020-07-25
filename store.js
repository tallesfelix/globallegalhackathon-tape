import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducer from './reducers/index'
import { createStore, applyMiddleware, compose } from 'redux'

const initialState = {};

const middleware = [
    promise(),
    thunkMiddleware,
]


export function initializeStore (initialState = {}) {
    let composeEnhancers = compose;
    
    middleware.push(createLogger())

    if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
    
    return createStore(
        reducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware)
        )
    )
}