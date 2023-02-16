import { Tooltip } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material';
import { IconButton } from '@mui/material';

const ListItem = ({ Icon, Text }) => {
  const ButtonHolder = styled('div')`
    padding: 0.5rem 3rem 0.5rem 0.8rem;
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;
    border-radius: 0.6rem;
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 10%);
    }
    & span {
      display: flex;
    }
    & h4 {
      font-size: 12px;
      font-weight: 500;
    }
  `;
  return (
    <ButtonHolder>
      <span>{Icon}</span>
      <h4>{Text}</h4>
    </ButtonHolder>
  );
};

export default ListItem;
