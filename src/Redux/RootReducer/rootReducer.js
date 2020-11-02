import { combineReducers } from 'redux'
import cartReducer from '../Reducers/CartReducer';
import directoryReducer from '../Reducers/DirectoryReducer'
import shopReducer from '../Reducers/shopReducer'

const rootReducer = combineReducers({
    shop: shopReducer,
    cart: cartReducer,
    directory: directoryReducer,
})

export  default rootReducer;