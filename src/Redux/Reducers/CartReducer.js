import CartActionType from "../Actions/ActionTypes/CartActionType";
import { CartInitialState } from "../State/CartInitialState";

const cartReducer =(state = CartInitialState, action) => {
    switch(action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN:
            console.log('here')
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;

    } 
}

export default cartReducer