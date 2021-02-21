import React from 'react';
import './styles.css';
const CityWeather = ({cityWeather}) => {
    return (
        <>
        <div id="main">
            <div><span>City Name</span>={cityWeather.main.name}</div>
            {/* <div><span>Temperature</span>={cityWeather.main.temp}<sup>o</sup>C</div>
            <div><span>Humidity</span>={cityWeather.main.humidity}</div>
            <div><span>Wind Speed</span>={cityWeather.wind.speed}</div> */}
        </div>
        </>
    );
};

export default CityWeather;
