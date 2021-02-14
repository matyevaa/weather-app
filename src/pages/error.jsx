/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, jsx } from '@emotion/react';


const error = css`
  border-style: ridge;
  width: 25rem;
  text-align: center;
  background: rgba(255,255,255, 0.6);
`;

const center = css`
  display: flex;
  justify-content: center;
`;


const ErorPage = () => {

  return (
  <div css={center}>
    <div css={error}>
      <h3>Please enter a city name to get the forecast.</h3>
      <h4>Example: Corvallis</h4>
      <h3>Then hit Enter or Go to get the forecast.</h3>
    </div>
  </div>
  );
};

export default ErorPage;
