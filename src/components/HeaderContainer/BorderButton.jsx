import { Tooltip } from '@mui/material';
import React from 'react';
import { IconButton } from '@mui/material';

const BorderButton = ({ Icon, TooltipName }) => {
  return (
    <Tooltip title={TooltipName}>
      <IconButton>{Icon}</IconButton>
    </Tooltip>
  );
};

export default BorderButton;
