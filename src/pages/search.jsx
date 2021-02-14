/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import ErrorPage from "./error";
import { Global, css, jsx } from '@emotion/react';
import WeatherData from './weatherData';


const api = {
  key: "1cb9aeb785ddcade1eef5973db409596",
  source: "https://api.openweathermap.org/data/2.5/"
}


const btn = css`
  height: 40px;
  margin-top: 9px;
  box-shadow: 3px 4px 0px 0px #899599;
  background:linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);
  background-color:#ededed;
  border-radius:15px;
  border:1px solid #d6bcd6;
  display:inline-block;
  cursor:pointer;
  color:#3a8a9e;
  font-family:Arial;
  font-size:17px;
  padding:7px 25px;
  text-decoration:none;
  text-shadow:0px 1px 0px #e1e2ed;
  outline: none;

  :hover {
  background:linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);
  background-color:#bab1ba;
  }
  :active {
    position:relative;
    top:1px;
  }

`;

const searchStyle = css`
    width: 310px;
    padding: 12px;
    appearance: none;
    background: none;
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    box-shadow: 0px 5px rgba(0, 0, 0, 0.2);
    color: #black;
    font-size: 18px;
    position: relative;
    margin: 7px;
    margin-bottom: 40px;
  `;

const nav = css`
  display: flex;
  justify-content: center;
  margin-top: 35px;
`;

export default function Search() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);

  const hitEnter = (e) =>  {
    if (e.key === "Enter")
      search();
  };

  const search = (e) => {
        fetch(`${api.source}forecast?q=${query}&units=imperial&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            console.log(weather);
          });
  }

  return (
    <div>
      <div css={nav}>
        <input type="text" className="searchBar" css={searchStyle} placeholder="Search by city name" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}/>
        <button css={btn} onClick={() => search(query)}>Go</button>
      </div>

      <div className="wrapper">
        <WeatherData forecasts={weather}/>
      </div>

    </div>
  );
}
