import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const MenDirectory = () => {
    const [state, setstate] = useState({
        sections: [{
            title: 'Hats',
            imageURL: 'https://www.thetrendspotter.net/best-mens-hat-styles-need-know/mens-hat-styles/',
            id: uuidv4()
        },
        {
            title: 'Jackets',
            imageURL: 'https://canary.contestimg.wish.com/api/webimage/5bebcb1b0132526ffae7ede1-large.jpg?cache_buster=32858f456ee63a351896c76d059ff966',
            id: uuidv4()
        }
    ]
    })
    return (
        <div>
            <h1>Men Directory</h1>
        </div>
    )
}

export default MenDirectory
