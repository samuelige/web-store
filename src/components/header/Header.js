import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

import './Header.css'
import NavBar from './NavBar';

const Header = () => {
    return (
        <div className="header">
            <h1 className="header__logo">Saige <span className="text-primary"> Clothing Mall</span></h1>
            <div className="header__search">
                <SearchIcon />
                <input type="text" placeholder="search"/>
                <NavBar	 />
            </div>
        </div>
    )
}

export default Header
