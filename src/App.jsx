import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useMediaQuery } from '@mui/material';
import { theme } from './style';

import Header from './components/HeaderContainer/Header';
import Categories from './components/NavBar/Categories';
import CategorySwipe from './components/Content/CategorySwipe';
import MainContent from './components/Content/MainContent';

function App() {
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Header />
      <span style={{ display: 'flex', flexDirection: 'row' }}>
        <SimpleBarReact
          style={{
            maxHeight: '100vh',
            overflowX: 'hidden',
            width: '240px',
            minWidth: isMediumDown ? '80px' : '240px',
          }}
        >
          <Categories />
        </SimpleBarReact>

        {/* main content */}
        <span style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ height: '100vh', width: '100%' }}>
            <SimpleBarReact
              style={{
                maxHeight: '100vh',
                overflowX: 'hidden',
                width: '90vw',
              }}
            >
              <CategorySwipe />
              <MainContent />
            </SimpleBarReact>
          </div>
        </span>
      </span>
    </>
  );
}

export default App;
