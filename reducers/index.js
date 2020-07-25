import { combineReducers } from 'redux'
import userReducer from './userReducer'
import audienciaReducer from './audienciaReducer'

export default combineReducers({
    user: userReducer,
    audiencia: audienciaReducer
})