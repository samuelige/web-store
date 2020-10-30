import React from 'react'
import CustomButton from '../forms/form-custom-button/customButton'
import './CartDropdown.scss'

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                <CustomButton>CHECKOUT</CustomButton>
            </div>
        </div>
    )
}

export default CartDropdown
