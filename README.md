# Weather App with React, Emotion, and OpenWeather API

### Assignment 3 for Advanced Web Development class at OSU instructed by professor R. Hess (2020).

The primary goal of this assignment is to practice fetching data from an HTTP API and using Emotion to style the components of an app.  Specifically, you'll use the [OpenWeather API](https://openweathermap.org/api) create a simple weather app that can display a daily forecast for a city specified by the user.

Please refer to the demo below:

![Screen capture of full app demo](src/images/weather-app-demo.gif)

# Application features

## Fetching forecast data for a user-specified city

App allows the user to submit a city name for which to fetch forecast data (e.g. a text input box and a "submit" button).  When the user submits a new city name, there is a call to the OpenWeather daily forecast API to fetch at least 7 days worth of forecast data for the specified city. Refer to the documentation here about how to formulate a call to the daily forecast API and about what an API response looks like:

https://openweathermap.org/forecast16

Each card displays the following information:
  * The date
  * The high and low temperatures
  * The short description of the day's weather
  * The appropriate icon for the day's weather.

> The OpenWeather API works best when you use a specific format for the city name, e.g. "Corvallis,OR,US". It is assumed that users will type city names in this format.

### Challenge

The implemented data loading functionality as a [custom React hook](https://reactjs.org/docs/hooks-custom.html) that takes the user-entered city name as an argument and returns three values, `forecast`, `isLoading`, and `error`, respectively representing the fetched forecast data, the loading status for the data fetching operation, and the error status of the operation.

## Application styling

To accomplish some of the layout required in the description above, Emotion style has been written for this application.

## Working with this code

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Before running this app for the first time, make sure to run `npm install` to install needed dependencies. Then, to run the app and see it in your browser, you can run
```
npm start
```
This will run the app in the development mode, and it should automatically open [http://localhost:3000](http://localhost:3000) to view the app in your browser (though you can manually open that URL in your browser, too).
