import React from "react";
import Titles from "./components/Titles.js";
import Form from "./components/Form.js";
import Weather from "./components/Weather.js";
import "./App.css";

// API | Normally don't put your API key in here for security purposes
const API_KEY = "";

class App extends React.Component{
  
  // State
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  // Async method
  getWeather = async (event) => {
    event.preventDefault();

    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const option = event.target.elements.option.value;
    let metricUnit;

    if (option === "far"){
      metricUnit = "imperial";
    } else {
      metricUnit = "metric";
    }

    // Call the API
    const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=${metricUnit}`);

    // JSON
    const data = await API_CALL.json();

    // Check if undefined
    if (data.message !== "city not found") {
      // Change Data
      this.setState({
        temperature : data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: undefined
      });
    } else {
      this.setState({
        temperature : undefined,
        city : undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a valid city/country."
      });
    }
  }

  render(){
    return(
      <div>
        <Titles />
        <Form 
          getWeather={this.getWeather}
        />
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          humidity={this.state.humidity}
          country={this.state.country}
          description={this.state.description}
          error = {this.state.error}
        /> 
      </div>
    );
  }
}

export default App;
