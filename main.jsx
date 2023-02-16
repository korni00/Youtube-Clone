import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './src/style';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

//xyzStyle={xyzStyle}
