/** @jsxImportSource @emotion/react */
import React from 'react';
import WeatherBody from './weatherBody';
import ErrorPage from "./error";
import { css, jsx } from '@emotion/react';


const align = css`
  display: flex;
  justify-content: center;
`;

const wrapper = css`

  border-style: ridge;
  width: 70rem;
  text-align: center;
  background: rgba(255,255,255, 0.6);
  ${align};
`;

const sep = css`
  padding: 10px 50px;
`;


const center = css`
  ${align};
`;

const WeatherData = ({forecasts}) => {

  return (
    <div css={center}>
      <div css={wrapper}>
         {forecasts.map(({dt,main, weather}) => (
              <div css={sep} key={dt}>
                  <WeatherBody temp_max={main.temp_max} temp_min={main.temp_min} dt={dt * 1000}
                    description={weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1)} icon={weather[0].icon}/>
              </div>
          ))}
      </div>
    </div>
  );
}


export default WeatherData;
