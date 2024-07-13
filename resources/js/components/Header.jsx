import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Login from './Login';
import Register from './Register';

const Header = () => {
    const [isConnectPopupVisible, setIsConnectPopupVisible] = useState(false);
    const [isCreateAccountPopupVisible, setIsCreateAccountPopupVisible] = useState(false);

    const handleConnectClick = () => {
        setIsConnectPopupVisible(true);
    };

    const handleCreateAccountClick = () => {
        setIsCreateAccountPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsConnectPopupVisible(false);
        setIsCreateAccountPopupVisible(false);
    };

    return (
        <div>
            <header>
                <div className="header__title">
                    <div className="header__profile">
                        <div className="header__avatar"></div>
                        <div className="header__connectionlinks">
                            <a className="header__connect" href="#" onClick={handleConnectClick}>Connect</a>
                            <a href="#" onClick={handleCreateAccountClick}>Create Account</a>
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

            {isConnectPopupVisible && (
                <div className="popup">
                    <div className="popup__content">
                        <button className="popup_close" onClick={handleClosePopup}>&times;</button>
                        <h2>Connect</h2>
                        <Login/>
                    </div>
                </div>
            )}

            {isCreateAccountPopupVisible && (
                <div className="popup">
                    <div className="popup__content">
                        <button className="popup_close" onClick={handleClosePopup}>&times;</button>
                        <h2>Create Account</h2>
                        <Register/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;