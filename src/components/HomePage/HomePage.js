import React, { Component } from 'react';
import "./HomePage.scss"
import Header from '../Header/Header';


// This is Dashboard for Weather-Forecasting 
export default class HomePage extends Component {
    render() {
        return (
            <div className="main_comp" >
                <div>
                    <Header></Header>
                </div>
                <div>
                    <p> Home Page </p>
                </div>
            </div>
        );
    }
}

