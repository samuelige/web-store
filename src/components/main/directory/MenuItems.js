import React from 'react'
import './MenuItems.css'
// import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";


const MenuItems = ({title, imageUrl, linkUrl, match}) => {
    let history = useHistory();
    const handleClick = () => history.push('/mendirectory')
    console.log(history)
    return (
        <div className="menu__item" onClick={handleClick}>
            <div className="background__image" style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className="cr-be">
                <div className="title">{title}</div>
                <div className="subtitle">SHOP NOW</div>
            </div>
        </div>
    )
}

export default MenuItems;

