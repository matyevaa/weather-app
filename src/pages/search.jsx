/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import ErrorPage from "./error";
import { Global, css, jsx } from '@emotion/react';


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
    margin-bottom: 70px;
  `;

const nav = css`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;


const SearchCity = ({onSearch}) => {
    const [city, setCity] = useState('');

    const hitEnter = (e) =>  {
      if (e.key === "Enter")
        onSearch(city);
    };

    return (
          <div css={nav}>
            <input
              css={searchStyle}
              onChange={(event) => setCity(event.target.value)}
              value={city}
              placeholder="Search by city name"
              onKeyPress={hitEnter}
            />
          <button css={btn} onClick={() => onSearch(city)}>Go</button>
          </div>

    );
  };


export default SearchCity;
