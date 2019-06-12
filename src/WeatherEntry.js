import React from 'react';

export default class WeatherEntry extends React.Component {
  render() {
    const liStyle = {
      margin: "15px 0",
      padding: "15px"
    }
    const {
      weatherEntry, 
      // onClick, 
      idx
      // buttonText
    } = this.props;

    return (
      <li style={liStyle}>
        <span>{weatherEntry.dt}, </span>
        <span>{weatherEntry.main.temp} degrees, </span>
        <span>{weatherEntry.weather[0].description}</span>
        {/* <button onClick={() => onClick(idx)}>{buttonText}</button> */}
      </li>
    )
  }
}
