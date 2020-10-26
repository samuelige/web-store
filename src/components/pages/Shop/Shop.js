import React from 'react'
import { useSelector } from 'react-redux'
import ShopItem from './ShopItem'
import './Shop.css'

const Shop = () => {
    const {sections} = useSelector(state => state)

    console.log(sections.shop, 'sections')

    return (
        <div>
            <h1 className='shop-title'>Shop</h1>
            <div className="shop__directory">
                {sections && sections.shop?.map((items)=>
                <ShopItem key={items.id} title={items.title} items={items.items}  />)}
            </div>
        </div>
    )
}

export default Shop
