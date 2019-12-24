import React, { Component } from 'react';
import Header from '../Header/Header';
import "./HomePage.scss";
import WeatherChart from '../WeatherChart/WeatherChart';
import humidityIcon from '../../assets/images/humidity.png';
import precipitation from '../../assets/images/precipitation.png'
import wind from '../../assets/images/wind.png';
import cloudIcon from '../../assets/images/cloud.png';
import pressure from '../../assets/images/pressure.png';
import weatherData from '../../mock-data/weatherData.json'



const TodayDate = new Date();
const month = TodayDate.getMonth();
const date = TodayDate.getDate();

// This is main Dashboard Page for Weather-Forecasting 
export default class HomePage extends Component {
   
    // setting data into the state
    state = {
        temp: "29.4",
        humidity: weatherData.list[0].humidity,
        weather: "Cloudy",
        cityName: weatherData.city.name,
        wind_speed: weatherData.list[0].wind_speed,
        precipitation: "87",
        pressure: weatherData.list[0].pressure

    }
    // Getting full name of the day
    convertDays() {
        const day = TodayDate.getDay();
        let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
        let currentDay = daylist[day];
        return currentDay;
    }
    formatAMPM() {
        let hours = TodayDate.getHours();
        let minutes = TodayDate.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    // Getting Full name of the month
    convertMonth() {
        let monthlist = ["January", "February", "March", "April ", "May", "June", "July", "August", "September", "October", "November", "December"];
        let currentMonth = monthlist[month];
        return currentMonth + " " + date;
    }
    render() {
        return (
            <div className="main-comp" >
                <Header></Header>
                <div className="home-page">
                    <div data-testid="html-element" className="city-data">
                        <span   className="city-info">{this.state.cityName}</span>
                        <span className="date-time">{this.convertMonth()}, {this.convertDays()} {this.formatAMPM()}</span>

                    </div>
                    <div className="current-temp" >

                        <span className="current-temp-text">{this.state.weather}</span>
                        <img className="cloud-icon" src={cloudIcon} alt="Cloudy" />
                        <span className="temperature-text">{this.state.temp} &#8451;</span> </div>
                    <div className="weather-info">
                        <table className="weather-table">
                            <thead>
                                <tr>
                                    <th className="weather-table-heading">Weather Report</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="weather-data">
                                        <img className="text-icon" src={pressure} alt="Temperature" />
                                        <span className="weather-text">{this.state.pressure} mmHg</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="weather-data">
                                        <img className="text-icon" src={humidityIcon} alt="Humidity" />
                                        <span className="weather-text">{this.state.humidity} %</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="weather-data">
                                        <img className="text-icon" src={wind} alt="Wind" />
                                        <span className="weather-text">{this.state.wind_speed} km/h</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="weather-data">
                                        <img className="text-icon" src={precipitation} alt="Precipitation" />
                                        <span className="weather-text">{this.state.precipitation} %</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <WeatherChart></WeatherChart>
            </div>
        );
    }
}

