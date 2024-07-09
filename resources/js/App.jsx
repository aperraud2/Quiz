import React from 'react';
import FeatureQuiz from './components/FeatureQuiz'

const App = () => (
    <header>
        <div className="header__title">
            <div className="header__connection">
            Connection part
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

 )
 
     return <FeatureQuiz></FeatureQuiz>


export default App;