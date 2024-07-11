import React from 'react';
import FeatureQuiz from './components/FeatureQuiz'
import AllQuiz from './components/AllQuiz'

const App = () => (

<div>


        <header>
            <div className="profile">
                <div className="profile-pic">
                    👤
                </div>
                <div className="login">
                    <a href="#">Connect</a> / <a href="#">create account</a>
                </div>
            </div>
            Squiz Game
        </header>
        <nav>
            <ul>
                <li><a href="#">Homepage</a></li>
                <li><a href="#">My profile</a></li>
                <li><a href="#">Quick Play</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>



<FeatureQuiz/>

{/* <AllQuiz></AllQuiz> */}
</div>
)
 



export default App;