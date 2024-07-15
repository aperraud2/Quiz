import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import UserContext from "./UserContext";

const Header = () => {
    const { user } = useContext(UserContext);
    const [isConnectPopupVisible, setIsConnectPopupVisible] = useState(false);
    const [isCreateAccountPopupVisible, setIsCreateAccountPopupVisible] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleConnectClick = () => {
        setIsConnectPopupVisible(true);
    };

    const handleCreateAccountClick = () => {
        setIsCreateAccountPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsConnectPopupVisible(false);
        setIsCreateAccountPopupVisible(false);
        setSuccessMessage(null);
        setErrorMessage(null);
    };

    const handleRegistrationSuccess = () => {
        setIsCreateAccountPopupVisible(false);
        setSuccessMessage("Registration successful!");
    };

    const handleRegistrationError = (error) => {
        setErrorMessage(error);
    };

    const handleLoginSuccess = () => {
        setIsConnectPopupVisible(false);
        setSuccessMessage("Login successful!");
    };

    const handleLoginError = (error) => {
        setErrorMessage(error);
    };

    return (
        <div>
            <header>
                <div className="header__title">
                    <div className="header__profile">
                        <div className="header__avatar">
                            <img
                                src="../../../images/blank-profile-picture.png"
                                alt="useravatar"
                            />
                        </div>
                        <div className="header__connectionlinks">
                            {user ? (
                                <Logout />
                            ) : (
                                <>
                                    <span
                                        className="header__connect"
                                        onClick={handleConnectClick}
                                    >
                                        Connect
                                    </span>
                                    <span onClick={handleCreateAccountClick}>
                                        Create Account
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                    Squiz Game
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Homepage</Link>
                        </li>
                        <li>
                            <Link to="/user">My Profile</Link>
                        </li>
                        <li>
                            <Link to="/quiz">Quick Play</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {isConnectPopupVisible && (
                <div className="popup">
                    <div className="popup__content">
                        <button
                            className="popup_close"
                            onClick={handleClosePopup}
                        >
                            &times;
                        </button>
                        <h2>Connect</h2>
                        <Login onSuccess={handleLoginSuccess} onError={handleLoginError} />
                    </div>
                </div>
            )}

            {isCreateAccountPopupVisible && (
                <div className="popup">
                    <div className="popup__content">
                        <button
                            className="popup_close"
                            onClick={handleClosePopup}
                        >
                            &times;
                        </button>
                        <h2>Create Account</h2>
                        <Register onSuccess={handleRegistrationSuccess} onError={handleRegistrationError} />
                    </div>
                </div>
            )}

            {successMessage && (
                <div className="popup success">
                    <div className="popup__content">
                        <button
                            className="popup_close"
                            onClick={() => setSuccessMessage(null)}
                        >
                            &times;
                        </button>
                        <h2>Success</h2>
                        <p>{successMessage}</p>
                    </div>
                </div>
            )}

            {errorMessage && (
                <div className="popup error">
                    <div className="popup__content">
                        <button
                            className="popup_close"
                            onClick={() => setErrorMessage(null)}
                        >
                            &times;
                        </button>
                        <h2>Error</h2>
                        <p>{errorMessage}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
