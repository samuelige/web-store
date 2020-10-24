import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import ShopIcon from '@material-ui/icons/Shop';
import ContactsIcon from '@material-ui/icons/Contacts';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import './Main.css'
import Directory from './directory/MainDirectory';
import {useHistory} from "react-router-dom";

  

const Main = () => {

    // router
    const history = useHistory();

    const handleHome = () => history.push('/');

    const handleShop = () => history.push('/shop');

    const handleContact = () => history.push('/contact');

    const handleSignIn = () => history.push('/signin');

    return (
        <div className="main">
            <div className="main__header">
                <div className="home">
                    <HomeIcon />
                    <h2 onClick={handleHome}>HOME</h2>
                </div>
                <div className="home">
                    <ShopIcon />
                    <h2 onClick={handleShop}>SHOP</h2>
                </div>
                <div className="home">
                    <ContactsIcon />
                    <h2 onClick={handleContact}>CONTACT</h2>
                </div>
                <div className="home">
                    <VpnKeyOutlinedIcon />
                    <h2 onClick={handleSignIn}>SIGN IN</h2>
                </div>
            </div>
           
            <Directory /> 
        </div>

    )
}

export default Main