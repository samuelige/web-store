import React, { useReducer } from 'react'
import CustomButton from '../forms/form-custom-button/customButton'
import './CartDropdown.scss'

const CartDropdown = () => {
    // const cartReducer = (state, action) => {
    //     switch (action.type) {
    //         case 'TOGGLE_CART_HIDDEN':
    //             return {
    //                 ...state,
    //                 hidden: !state.hidden  //If it is true, I want it to be false. And if it is false, I want it to be true.
    //             };
    //         default:
    //             return state;
    //     }
    // }
    
    // const [cartState, dispatch] = useReducer(cartReducer, {
    //     hidden: true,
    // })

    // const toggle = () => {
    //     dispatch({
    //         type: 'TOGGLE_CART_HIDDEN',
    //     })
    // }

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    )
}


export default CartDropdown
