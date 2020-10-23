import React from 'react'
import './MenuItems.css'

const MenuItems = ({title, imageUrl}) => {
    return (
        <div className="menu__item" style={{backgroundImage:`url(${imageUrl})`}}>

            <div className="cr-be">
                <div className="title">{title}</div>
                <div className="subtitle">SHOP NOW</div>
            </div>
        </div>
    )
}

export default MenuItems

