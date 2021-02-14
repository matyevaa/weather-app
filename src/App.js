/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Global, css, jsx } from '@emotion/react';
import Moment from 'react-moment';
import WeatherBody from './pages/weatherBody';
import UseFetch from './hooks/UseFetch';
import Search from './pages/search'
import WeatherData from './pages/weatherData';
import ErrorPage from "./pages/error";

const api = {
  key: "1cb9aeb785ddcade1eef5973db409596",
  source: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  const {data, error, isLoading, setUrl} = UseFetch();

  const blue = css`background-color: #ccebff`;
  const image = "https://img5.goodfon.com/original/1366x768/c/98/oborotov-aleksei-kyrgyzstan-kirgiziia-sredniaia-aziia-gory-k.jpg";
//https://wallpapercave.com/wp/wp4189513.jpg
//https://img5.goodfon.com/wallpaper/nbig/c/98/oborotov-aleksei-kyrgyzstan-kirgiziia-sredniaia-aziia-gory-k.jpg

  const backImg = css`
    background-image: url(${image});
  `;

  /*<div className="wrapper">
     <WeatherBody dt={1602104400*1000} temp_min="22" temp_max="23" main="Clear" icon="01d" />
  </div>
*/

  return (

    <div>

      <Global
          styles={css`
            body {
              overflow: hidden;
              background-repeat: no-repeat;
              color: black;
              ${backImg};
              ${blue};

              .city {
                color: black;
              }

              .wrapper {
                border-style: ridge;
                width: 11rem;
                text-align: center;
                background: rgba(255,255,255, 0.6);
              }

            }`}/>

          <div className="App">

            <Search search={(query) => setUrl(`${api.source}forecast?q=${query}&APPID=${api.key}`)}/>



          </div>
    </div>
  );
}


export default App;
