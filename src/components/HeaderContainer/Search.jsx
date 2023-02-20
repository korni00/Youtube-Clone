import { useState } from 'react';
import React from 'react';
import { styled, Tooltip, TextField } from '@mui/material';
import BorderButton from './BorderButton';
//icons
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SearchIcon from '@mui/icons-material/Search';

const SearchHolder = styled('div')`
  display: flex;
  width: 100%;
  #clear {
    height: 2.5rem;
    padding: 0.25rem;
    background-color: hsl(0, 0%, 7%);
    border-top: 1px solid hsl(0, 0%, 18.82%);
    border-bottom: 1px solid hsl(0, 0%, 18.82%);
  }
  & span {
    height: 40px;
    width: 100%;
    display: flex;
    #search {
      border: 1px solid hsl(0, 0%, 18.82%);
      background-color: hsla(0, 0%, 100%, 0.08);
      border-radius: 0px 40px 40px 0px;
      cursor: pointer;
      width: 64px;
      margin-right: 0.5rem;
    }
    & button {
      background: #181818;
      color: #f1f1f1;
    }
  }

  @media (max-width: 660px) {
    #hoverlogo {
      display: none;
    }
    & span #main_input {
      display: none;
    }
    & span {
      #search {
        background: none;
        border: none;
        padding: none;
        color: #f1f1f1;
        border-radius: 50%;
        width: 40px;
        &:hover {
          background: rgba(255, 255, 255, 10%);
        }
      }
      & button {
        background: #212121;
        border-radius: 0px;
        &:hover {
          background: rgba(255, 255, 255, 10%);
        }
      }
    }
  }
`;

const Search = () => {
  const [clear, setClear] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleResetValue = () => {
    setInputValue('');
  };

  const handleChangeValue = (e) => {
    setInputValue(e.target.value);
  };
  function setClearOnEnter() {
    setClear(true);
  }
  function setClearOnLeave() {
    setClear(false);
  }
  return (
    <>
      <SearchHolder>
        <span>
          <input id='main_input' placeholder='Szukaj' value={inputValue} onChange={handleChangeValue} />
          {inputValue && <ClearIcon onClick={handleResetValue} id='clear' />}
          <Tooltip title='Szukaj'>
            <button id='search'>
              <SearchIcon />
            </button>
          </Tooltip>
          <BorderButton TooltipName='Wyszukaj Głosowo' Icon={<KeyboardVoiceIcon />} />
        </span>
      </SearchHolder>
    </>
  );
};

export default Search;
