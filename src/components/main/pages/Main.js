import React, { useEffect, useState } from 'react'
import { auth, createUserProfileDocument } from '../../../Firebase/firebase.utils'
import Directory from '../directory/MainDirectory'
import NavBar from '../../header/NavBar'
import './Main.css'

const Main = () => {
    const [state, setState] = useState({
        currentUser: null,
    })

    let unsubscribeFromAuth = null;
    
    useEffect(() => {
        unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                
                userRef.onSnapshot(snapShot => {
                    setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    }); 
                })
            }
            setState({currentUser:userAuth})
        })
        unsubscribeFromAuth();
    }, [])
    return (
        <div className="main">
            {/* <NavBar currentUser={state.currentUser}/> */}
            <Directory />
        </div>
    )
}

export default Main
