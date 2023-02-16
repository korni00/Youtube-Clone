import { styled, IconButton, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import UploadIcon from '@mui/icons-material/Upload';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
//icons
import Logo from './Logo';
import Search from './Search';
import BorderButton from './BorderButton';
import { useState } from 'react';
function Header() {
  const HeaderHolder = styled('div')`
    height: 56px;
    width: 100%;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    #start {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
    #center {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 700px;
      margin-right: 40px;
      margin-left: 40px;
    }
    #end {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      #buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: end;
        gap: 1rem;
        
      }
    }

    @media (max-width: 660px) {
      #center {
      margin-right: 0px;
      margin-left: 0px;
    }
  `;
  return (
    <HeaderHolder>
      <span id='start'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Logo />
      </span>
      <span id='center'>
        <Search />
      </span>
      <span id='end'>
        <div id='buttons'>
          <BorderButton TooltipName='Prześlij' Icon={<UploadIcon />} />
          <BorderButton TooltipName='Powiadomienia' Icon={<NotificationsNoneIcon />} />
        </div>
      </span>
    </HeaderHolder>
  );
}

export default Header;
