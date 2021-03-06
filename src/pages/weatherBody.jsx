/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';


const card = css`
  img {
    top: 0;
  }
`;


const WeatherBody =  ({dt, temp_min, temp_max, description, icon}) => {

  const date = new Date(dt);

    return (
      <div className="card" css={card}>
        <div className="image">
          <img src={`http://openweathermap.org/img/w/${icon}.png`}/>
        </div>
        <div className="cardBody">
          <h3 className="title">{description}</h3>
          <p>
            {date.toLocaleDateString()} - {date.toLocaleTimeString()}
          </p>
          <p>Min: {temp_min}°C</p>
          <p>Max: {temp_max}°C</p>
        </div>
      </div>
    );
};


export default WeatherBody;
