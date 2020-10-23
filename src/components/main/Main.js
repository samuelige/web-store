import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import ShopIcon from '@material-ui/icons/Shop';
import ContactsIcon from '@material-ui/icons/Contacts';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import './Main.css'
import Directory from './directory/MainDirectory';

const Main = () => {
    return (
        <div className="main">
            <div className="main__header">
                <div className="home">
                    <HomeIcon />
                    <h2>HOME</h2>
                </div>
                <div className="home">
                    <ShopIcon />
                    <h2>SHOP</h2>
                </div>
                <div className="home">
                    <ContactsIcon />
                    <h2>CONTACT</h2>
                </div>
                <div className="home">
                    <VpnKeyOutlinedIcon />
                    <h2>SIGN IN</h2>
                </div>
            </div>
            <Directory /> 
        </div>

    )
}

export default Main
