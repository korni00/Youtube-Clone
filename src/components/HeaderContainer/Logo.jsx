import React from 'react';
import { styled } from '@mui/material';

const Logo = () => {
  const LogoHolder = styled('div')`
    margin: 0;
    padding: 0;
    gap: 0.25rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    & img {
      width: 90px;
      height: 20px;
    }
    & h6 {
      color: #aaa;
      font-size: 10px;
      font-weight: 200;
      margin-bottom: 20px;
    }
  `;
  return (
    <LogoHolder>
      <img src='https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-white-png.png'></img>
      <h6>PL</h6>
    </LogoHolder>
  );
};

export default Logo;
