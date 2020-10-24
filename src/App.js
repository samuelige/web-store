import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from './components/pages/Homepage/Homepage'
import Shop from './components/pages/Shop/Shop'
import MenDirectory from './components/main/directory/MenDirectory'
import WomenDirectory from './components/main/directory/WomenDirectory'
import Contact from './components/pages/Contact/Contact'
import SignIn from './components/pages/SignIn/SignIn'


const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/Shop' component={Shop}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/signin' component={SignIn}/>
                <Route path='/mendirectory' component={MenDirectory}/>
                <Route path='/womendirectory' component={WomenDirectory}/>
            </Switch>

            
        </div>
    )
}

export default App
