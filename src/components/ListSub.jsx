import { Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material';
import { IconButton } from '@mui/material';
import SensorsIcon from '@mui/icons-material/Sensors';
const ListSub = ({ Icon, Text, Live, New }) => {
  const [isLive] = useState(Live);
  const [isNew] = useState(New);

  const ButtonHolder = styled('div')`
    padding: 0.5rem 3rem 0.5rem 0.8rem;
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;
    border-radius: 0.6rem;
    cursor: pointer;
    & svg {
      color: red;
      width: 20px;
      position: absolute;
      right: 2.2rem;
    }
    & span {
      width: 8px;
      height: 8px;
      background: #53b0fc;
      border-radius: 50%;
      position: absolute;
      right: 2.2rem;
    }
    &:hover {
      background: rgba(255, 255, 255, 10%);
    }
    & img {
      display: flex;
      width: 25px;
      border-radius: 50%;
    }
    & h4 {
      font-size: 12px;
      font-weight: 500;
    }
  `;

  return (
    <ButtonHolder>
      <img src={Icon} />
      <h4>{Text}</h4>
      {isLive && <SensorsIcon />}
      {isNew && <span />}
    </ButtonHolder>
  );
};

export default ListSub;
