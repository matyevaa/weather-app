import React from 'react';
import WeatherBody from './weatherBody';
import ErrorPage from "./error";


const WeatherData = ({forecasts}) => {
    return (
        <div>
           {forecasts ? (forecasts.list.map(({dt, main, weather}) => {
                return
                  <div key={dt}>
                      <WeatherBody
                      temp_max={main.temp_max}
                      temp_min={main.temp_min}
                      dt={dt * 1000}
                      main={weather[0].main}
                      icon={weather[0].icon}
                    />
                  </div>
            })) : (<ErrorPage/>)
          }
        </div>
    );
}


export default WeatherData;
