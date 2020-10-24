// import MenuItems  from './MenuItems';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import MenuItems from './MenuItems';

import  './MainDirectory.css'
import { useHistory } from 'react-router-dom';

const Directory = () => {
    let history = useHistory();
    let handleMenClick;
    let handleWemenClick;
    const [state, setstate] = useState({
        sections: [{
            title: 'Men',
            imageURL: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/11/18/11/international-mens-day-main.jpg',
            id: uuidv4(),
            onClick: handleMenClick = () => history.push('/mendirectory'),
        },
        {
            title: 'Women',
            imageURL: 'https://www.poynter.org/wp-content/uploads/2020/08/The-19th-Group-01.jpg',
            id: uuidv4(),
            onClick: handleWemenClick = () => history.push('/womendirectory')
        }
    ]
    })
    return (
        
        <div className="main__directory">
            {state.sections.map(item => <MenuItems key={item.id} title={item.title} imageUrl={item.imageURL} onClick={item.onClick}/>)}
        </div>
    )
}

export default Directory
