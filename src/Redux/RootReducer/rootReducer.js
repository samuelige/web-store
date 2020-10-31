import { combineReducers } from 'redux'
import directoryReducer from '../Reducers/DirectoryReducer'
import shopReducer from '../Reducers/shopReducer'

const rootReducer = combineReducers({
    shop: shopReducer,
    directory: directoryReducer,
})

export  default rootReducer;