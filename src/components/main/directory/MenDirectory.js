import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import MenuItems from './MenuItems';
import './MenDirectory.css'

const MenDirectory = () => {
    const [state, setstate] = useState({
        sections: [{
            title: 'Hats',
            imageURL: 'https://manofmany.com/wp-content/uploads/2017/10/Guide-to-Wearing-Mens-Hats-With-Suits-20.jpg',
            id: uuidv4()
        },
        {
            title: 'Jackets',
            imageURL: 'https://canary.contestimg.wish.com/api/webimage/5bebcb1b0132526ffae7ede1-large.jpg?cache_buster=32858f456ee63a351896c76d059ff966',
            id: uuidv4()
        },
        {
            title: 'Sneakers',
            imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTj7USF4jd1soSvile40Lq7YISeCujEUlVKGQ&usqp=CAU',
            id: uuidv4()
        },
        {
            title: 'Shoes',
            imageURL: 'https://images-eu.ssl-images-amazon.com/images/I/61PF7GTAPYL._AC_UL160_.jpg',
            id: uuidv4()
        },
        {
            title: 'Wrist Watch',
            imageURL: 'https://sc01.alicdn.com/kf/HTB1LrjrLFXXXXcMXpXXq6xXFXXXj.jpg_350x350.jpg',
            id: uuidv4()
        },
        {
            title: 'Slippers',
            imageURL: 'https://i.pinimg.com/originals/c2/dc/81/c2dc815f53b568f4f734c600fa092da4.jpg',
            id: uuidv4()
        },
        {
            title: 'Leather Belt',
            imageURL: 'https://www.beltdesigns.com/wp-content/uploads/2019/06/Womens-Leather-Belt-Light-Chestnut-Solid-Brass-Buckle-2.5cm-Wide.jpg',
            id: uuidv4()
        },
        {
            title: 'Trousers',
            imageURL: 'https://stylesatlife.com/wp-content/uploads/2019/05/Latest-Designs-of-Trousers-for-Men-in-Casual-and-Formal-Look.jpg',
            id: uuidv4()
        },
    ]
    })
    return (
        <div>
            <h1 className="men__title">Men Directory</h1>
            <div className="men__directory">
            {state.sections.map((item) => 
                <MenuItems key={item.id} title={item.title} imageUrl={item.imageURL} /> //Reusable component
            )}
            </div>
        </div>
    )
}

export default MenDirectory
