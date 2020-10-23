import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import HelpIcon from '@material-ui/icons/Help';

import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1 className="header__logo">Saige <span className="text-primary">Mall</span></h1>
            <div className="header__search">
                <SearchIcon />
                <input type="text" placeholder="search"/>
                <div className="header__icons">
                    <NotificationsIcon />
                    <AddLocationIcon />
                    <HelpIcon />
                </div>
            </div>
            

        </div>
    )
}

export default Header