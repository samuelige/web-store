import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import ShopIcon from '@material-ui/icons/Shop';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ContactsIcon from '@material-ui/icons/Contacts';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import './NavBar.css'
import {useHistory} from "react-router-dom";
import { auth } from '../../Firebase/firebase.utils';
import CartIcon from '../cart/cart-icon'
import CartDropdown from '../cart/CartDropdown';
import { useSelector } from 'react-redux';



  
const NavBar = ({currentUser}) => {

    const {hidden} = useSelector(state => state.cart);
    console.log(hidden);


    // router
    const history = useHistory();

    const handleHome = () => history.push('/');

    const handleShop = () => history.push('/shop');

    const handleContact = () => history.push('/contact');

    const handleSignIn = () => history.push('/signin');

    return (
        <div className="nav">
            <div className="nav__header">
                <div className="home">
                    <h2 onClick={handleHome}>HOME</h2>
                </div>
                <div className="home">
                    <h2 onClick={handleShop}>SHOP</h2>
                </div>
                <div className="home">
                    <h2 onClick={handleContact}>CONTACT</h2>
                </div>
                {currentUser ? 
                <div className="home">
                    <h2 onClick={()=> auth.signOut()}>SIGN OUT</h2>
                </div>
                :
                <div className="home">
                    <h2 onClick={handleSignIn}>SIGN IN</h2>
                </div>
                }
                <div className="home">
                    <CartIcon />
                </div>
            </div>
            {
            !hidden && <CartDropdown />
            }
        </div>

    )
}

export default NavBar