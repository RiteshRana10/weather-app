import React, { Component } from 'react';
import "./Header.scss"

// This is fixed top bar component of the application.
export default class Header extends Component {
    render() {
        return (
            <div className="header_bar">
                <label className="header_text1">
                    Weather Forecasting
        </label>
            </div>
        )
    }
}