import React from 'react';
import "./Header.scss";
import notification from '../../assets/images/notification.png'
import logo from '../../assets/images/logo.png'

// This is fixed top bar component of the application.
const Header = () => 
{
        return (
            <div className="header-bar">
                <img className="logo-icon" src={logo} alt="Weather Forecast" />
                <span className="header-text">Weather Forecast</span>
                <img className="notification-icon" src={notification} alt="Notification" />
            </div>
        )
};
export default Header;