import React from 'react'
import { useDispatch } from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assist/shopping-bag.svg'
import { toggleCartHidden } from '../../Redux/Actions/CartAction'
import './cart-icon.scss'


const CartIcon = () => {
    const dispatch = useDispatch()
    
    return (
        <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className='shopping-icon'/>
            <span className="item-count">0</span>
        </div>
    )
}


export default CartIcon
