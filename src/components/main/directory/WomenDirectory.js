import React, { useState } from 'react'
import MenuItems from './MenuItems'
import { v4 as uuidv4 } from 'uuid';
import './WomenDirectory.css'

const WomenDirectory = () => {
    const [state, setstate] = useState({
        sections: [{
            title: 'Hats',
            imageURL: 'https://images-na.ssl-images-amazon.com/images/I/61IxpKIPAgL._AC_UX385_.jpg',
            id: uuidv4()
        },
        {
            title: 'Jackets',
            imageURL: 'https://www.kiltandjacks.com/wp-content/uploads/2017/06/victorian-trench-coat-ruffle-swallowtail-jacket-overcoat-military-gothsteamp-model-face-800x800.jpg',
            id: uuidv4()
        },
        {
            title: 'Sneakers',
            imageURL: 'https://cdn.shopify.com/s/files/1/0051/0128/9561/products/product-image-935150246_800x.jpg?v=1597044390',
            id: uuidv4()
        },
        {
            title: 'Shoes',
            imageURL: 'https://i.pinimg.com/originals/e2/7f/22/e27f22b33132782555b94ffb03e51771.jpg',
            id: uuidv4()
        },
        {
            title: 'Wrist Watch',
            imageURL: 'https://i.pinimg.com/564x/9b/fc/9d/9bfc9d44336d8c2fe66560ef848c3b31.jpg',
            id: uuidv4()
        },
        {
            title: 'Slippers',
            imageURL: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/Y/76588_1562180390.jpg',
            id: uuidv4()
        },
        {
            title: 'Leather Belt',
            imageURL: 'https://images-na.ssl-images-amazon.com/images/I/719I1MkjknL._AC_UX385_.jpg',
            id: uuidv4()
        },
        {
            title: 'Trousers',
            imageURL: 'https://www.mumsnet.com/system/1/assets/files/000/076/032/76032/4de03a283/original/xlead-630x285.jpg,q1552929821.pagespeed.ic.7GHDTI85tt.jpg',
            id: uuidv4()
        },
    ]
    })
    return (
        <div>
            <h1 className="women__title">Women Directory</h1>
            <div className="women__directory">
            {state.sections.map((item) => 
                <MenuItems key={item.id} title={item.title} imageUrl={item.imageURL} /> //Reusable component
            )}
            </div>
        </div>
    )
    
}

export default WomenDirectory
