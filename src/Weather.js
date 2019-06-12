import React from 'react';
// import apikey from './apikey.js';
import './App.css';
import WeatherEntry from './WeatherEntry';

export default class Weather extends React.Component {
  render() {
    const ulStyle = {
      spaceAbove: "10px",
      marginTop: "10px",
      listStyleType: "none"
    };

    const weatherList = this.props.weatherEntries
    .map((weatherEntry, idx) => {
      return (
        <WeatherEntry
          weatherEntry={weatherEntry}
          // onClick={this.props.onFoo}
          idx={idx}
          key={idx}
          // buttonText="Foo"
        />
      );
    });

    return (
      <div>
        <h2>Weather Entries</h2>
        <ul style={ulStyle}>
          {weatherList}
        </ul>
      </div>
    );
  }
}
