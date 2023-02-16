import { createTheme } from '@mui/material';

const globalTheme = {
  palette: {
    primary: {
      main: '#c7c9c8',
      light: '#0ad59c',
      contrastText: '#EFEFF1',
    },

    background: {
      base: '#0f0f0f',
      paper: '#18181b',
    },

    text: {
      primary: '#EFEFF1',
      secondary: '#85ABBE',
    },

    success: {
      light: '#81c784',
      main: '#66bb6a',
      dark: '#388e3c',
    },

    error: {
      light: '#ff2c2c',
      main: '#fa2c46',
      dark: '#ad1e30',
    },
  },

  shape: {
    borderRadius: '0.5rem',
  },
  spacing: 8,
};

export const theme = createTheme({
  ...globalTheme,
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: 'white',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: globalTheme.palette.primary.main,
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: globalTheme.palette.primary.main,
            },
            '&:hover fieldset': {
              borderColor: globalTheme.palette.primary.main,
            },
            '&.Mui-focused fieldset': {
              borderColor: globalTheme.palette.primary.main,
            },
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          background: 'rgba(0,0,0,0)',
          color: 'white',
          ':hover': {
            background: 'rgba(255,255,255,0.15)',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          padding: '0.45rem .25rem',
          background: 'rgba(0,0,0,0.35)',
          lineHeight: 1,
          fontWeight: 600,
          ':hover': {
            background: 'rgba(255,255,255,0.15)',
          },
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: `gray`,
          borderRadius: '0.2rem',
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Roboto, Arial, sans-serif;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: #0f0f0f;
}

a {
  outline: none;
  display: flex;
  border: none;
  text-decoration: none;
}

#main_input {
  width: 100%;
  display: flex;
  background-color: hsl(0, 0%, 7%);
  border: 1px solid hsl(0, 0%, 18.82%);
  border-right: none;
  box-shadow: inset 0 1px 2px hsla(0, 0%, 0%, 0);
  color: hsla(0, 100%, 100%, 0.88);
  padding: 0px 4px 0px 16px;
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  border-radius: 40px 0 0 40px;
  &:focus,
  &:active {
    border: 1px solid #1c62b9;
    outline: none;
  }
}

.simplebar-scrollbar:before {
  pointer-events: all;
  border-radius: 0.5rem;
  background: #c7c9c8;
}

        `,
    },
  },
});
