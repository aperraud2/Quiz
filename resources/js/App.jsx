import React from 'react';
import FeatureQuiz from './components/FeatureQuiz'
import AllQuiz from './components/AllQuiz'

const App = () => (

<div>    
    <header>
        <div className="header__title">
            <div className="header__connection">
                <div className="user-photo"></div>
                <div className="connection-links">
                    <a className="header__connect" href="#connect">Connect</a>
                    <a className="header__create" href="#create-account">Create Account</a>
        </div>
            </div>
            <div className="header__h1">
                <h1>Squiz Game</h1> 
            </div>
        </div>
        <nav>
            <ul>
                <div className="header__nav">
                    <li>Homepage</li> |
                    <li>My profile</li> |
                    <li>Quick Play</li> |
                </div>
                <div className="header__nav_about">
                    <li>| About</li>
                </div>
            </ul>
        </nav>
    </header>

<FeatureQuiz/>

{/* <AllQuiz></AllQuiz> */}
</div>
)
 



export default App;