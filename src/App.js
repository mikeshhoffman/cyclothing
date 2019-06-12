import React from 'react';
import Weather from './Weather';
// import API_KEY from './apikey.js';
import './App.css';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default class App extends React.Component {
  state = {
    weatherEntries: []
  }

  componentDidMount() {
    const zipCode = `98103`;
    const API_BASE = 'https://api.openweathermap.org/data/2.5/forecast';
    const url = `${API_BASE}?zip=${zipCode}&units=imperial&appid=${API_KEY}`;

    fetch(url)
    .then(function(response) {
      return response.json();
    })
    // .then(weatherJson => console.log("weatherJson: ", weatherJson.list))
    .then(weatherJson => {
      this.setState(prevState => {
        return {
          weatherEntries: weatherJson.list
        }
      });
    })
    //   // prepDisplayArea(weatherJson);
    //   // displayWeatherReadings(weatherJson);
    //   // displayClothingToAdd();
    .catch(function(e){
      // apiErrorEl.classList.add('visible');
      // apiErrorEl.classList.remove('hidden');
      // apiErrorEl.textContent = "Unable to get data for the specified zip code";
      // resultDisplayEl.classList.add('hidden');
      // resultDisplayEl.classList.remove('visible');
    });
  }

  render() {
    return (
      <div className="App">
        <Weather
          weatherEntries={this.state.weatherEntries}
        />
      </div>
    );
  }
}

/*
Parts of the page:
heading
form
dynamic heading: Forecast for <City> <Zip>
10 weather items, 3 hours apart
heading: Clothing to Add:
1-3 lists of clothes
*/
