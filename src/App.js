/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Global, css, jsx } from '@emotion/react';
import {API_KEY, API_SOURCE} from './api/conf'
import WeatherBody from './pages/weatherBody';
import UseFetch from './hooks/UseFetch';
import SearchCity from './pages/search'
import WeatherData from './pages/weatherData';
import ErrorPage from "./pages/error";


function App() {

  const {data, error, isLoading, setUrl} = UseFetch();

  const content = () => {
    if(error) return <ErrorPage/>
    if(!data && isLoading) return <h2>Wait a min...</h2>
    if(!data) return null;
    return <WeatherData forecasts={data.list} />
  };

  const image = "https://img5.goodfon.com/original/1366x768/c/98/oborotov-aleksei-kyrgyzstan-kirgiziia-sredniaia-aziia-gory-k.jpg";

  const backImg = css`
    background-image: url(${image});
  `;

  return (
    <div>
      <Global
          styles={css`
            body {
              overflow: hidden;
              background-repeat: no-repeat;
              color: black;
              font-family: Garamond;
              ${backImg};
            }
          `} />

        <div>
          <SearchCity onSearch={(city) => setUrl(`${API_SOURCE}/data/2.5/forecast?q=${city}&cnt=5&units=imperial&appid=${API_KEY}`)} />
          {content()}
        </div>
      </div>
    );
}


export default App;
