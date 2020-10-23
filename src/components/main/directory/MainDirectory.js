// import MenuItems  from './MenuItems';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import MenuItems from './MenuItems';

import  './MainDirectory.css'

const Directory = () => {
    const [state, setstate] = useState({
        sections: [{
            title: 'Men',
            imageURL: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/11/18/11/international-mens-day-main.jpg',
            id: uuidv4()
        },
        {
            title: 'Women',
            imageURL: 'https://www.poynter.org/wp-content/uploads/2020/08/The-19th-Group-01.jpg',
            id: uuidv4()
        }
    ]
    })
    console.log(state.sections)
    return (
        
        <div className="main__directory">
            {state.sections.map(item => <MenuItems key={item.id} title={item.title} imageUrl={item.imageURL}/>)}
        </div>
    )
}

export default Directory
