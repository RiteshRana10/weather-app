import React, { Component } from 'react';
import "./WeatherChart.scss"
import { Line } from 'react-chartjs-2';
import cloud3 from '../../assets/images/cloud3.png';
import sunny from '../../assets/images/sunny.png';
import lighting1 from '../../assets/images/lighting1.png';
import lighting from '../../assets/images/lighting.png';

// Setting data for the line chart
const data = {
    labels: ['12 am', '3 am', '6 am', '9 am', '12 pm', '3 pm', '6 pm', '9 pm'],
    datasets: [
        {
            label: 'Singapore Weather',
            lineTension: 0.1,
            backgroundColor: 'rgba(255, 204, 0, 0.2)',
            borderColor: '#ffcc33',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#ffcc33',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: '#ffcc33',
            pointHoverBorderColor: '#ffcc33',
            pointHoverBorderWidth: 2,
            pointRadius: 8,
            pointHitRadius: 10,
            fill: true,
            
            data: [20, 22, 24, 25, 26, 25, 23, 21]
        }
    ],
}
const options = {
    legend: {
        display: false
     },
    scales: {
        xAxes: [{
            gridLines: {
                display: false
            }
        }],
        yAxes: [{
            gridLines: {
                display: false
            },
        }],
    },

}

const weatherInformation = [
    {
        "day": "Sun",
        "image": lighting,
        "temperature": 20
    },
    {
        "day": "Mon",
        "image": cloud3,
        "temperature": 22
    },
    {
        "day": "Tue",
        "image": lighting1,
        "temperature": 24
    },
    {
        "day": "Wed",
        "image": cloud3,
        "temperature": 25
    },
    {
        "day": "Thu",
        "image": sunny,
        "temperature": 26
    },
    {
        "day": "Fri",
        "image": cloud3,
        "temperature": 25
    },
    {
        "day": "Sat",
        "image": lighting,
        "temperature": 23
    }
]
export default class WeatherChart extends Component {
    render() {
        //  For displaying the Chart and weather data with images according to the temperature.
        return (
            <div className="dashboarb-weather">
                <Line data={data} options={options} height={50} />
                <div className="weather-forecast">
                    {weatherInformation.map((data, i) => {
                        return <div className="weather-detail" key={i}>
                            <span className="weather-text">{data.day}</span>
                            <img className="weather-image" src={data.image} alt="Cloudy" />
                            <span className="weather-text">{data.temperature} &#8451;</span>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}