import React from 'react';
import { Link } from "react-router-dom";


const Header = () => (

<div>
    <header>
        <div className="header__title">
            <div className="header__profile">
                <div className="header__avatar">
                </div>
                <div className="header__connectionlinks">
                    <a className= "header__connect" href="#">Connect</a>
                    <a href="#">create account</a>
            </div>
            </div>
            Squiz Game
        </div>
        <nav>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/user">My Profile</Link></li>
                <li><Link to="/quiz">Quick Play</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    </header>
</div>
)


export default Header;