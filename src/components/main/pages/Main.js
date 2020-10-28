import React, { useEffect, useState } from 'react'
import { auth } from '../../../Firebase/firebase.utils'
import Directory from '../directory/MainDirectory'
import NavBar from '../NavBar'
import './Main.css'


const Main = () => {
    const [state, setState] = useState({
        currentUser: null,
    })

    let unsubscribeFromAuth = null;
    
    useEffect(() => {
        unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            setState({currentUser:user});
        })
        unsubscribeFromAuth();
    }, [])
    return (
        <div className="main">
            <NavBar currentUser={state.currentUser}/>
            <Directory />
        </div>
    )
}

export default Main
