import React from 'react'
import './CollectionItems.css'

const CollectionItems = ({id, name, price, imageUrl}) => {
    return (
        <div clasName='collection-Item'>
            <div className="collection-Image" style={{backgroundImage: `url(${imageUrl}`}} />
            <div className="collection-Footer">
                <div className="collection-Name">{name}</div>
                <div className="collection-Price">{price}</div>
            </div>
        </div>
    )
}

export default CollectionItems
