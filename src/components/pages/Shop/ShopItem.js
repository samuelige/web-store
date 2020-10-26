import React from 'react'
import CollectionItems from './CollectionItems'
import './ShopItem.css'

const ShopItem = ({title, items}) => {
    return (
        <div className="shop_items">
            <h1 className="shopTitle">{title.toUpperCase()}</h1>
            <div className="shop-Preview">
                {items.map(item => (
                    <CollectionItems key={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl}/>
                ))}
            </div>
        </div>
    )
}

export default ShopItem
