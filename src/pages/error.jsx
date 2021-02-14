/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, jsx } from '@emotion/react';


const error = css`
  border-style: ridge;
  width: 25rem;
  text-align: center;
  background: rgba(255,255,255, 0.6);
  
`;

const ErorPage = () => {

  return (
    <div css={error}>
      <h3>Please enter a city name to get a forecast.</h3>
      <p>Example: Corvallis</p>
      <h3>Then hit enter or Go to get a forecast.</h3>
    </div>
  );
};

export default ErorPage;
