import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import Header from './components/HeaderContainer/Header';
import Categories from './components/NavBar/Categories';
import CategorySwipe from './components/Content/CategorySwipe';
import MainContent from './components/Content/MainContent';

function App() {
  return (
    <>
      <Header />
      <span style={{ display: 'flex', flexDirection: 'row' }}>
        <Categories />
        {/* main content */}
        <div style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'row' }}>
          <SimpleBarReact
            style={{
              height: '95vh',
              overflowX: 'hidden',
              width: '100vw',
            }}
          >
            <CategorySwipe />
            <MainContent />
          </SimpleBarReact>
        </div>
      </span>
    </>
  );
}

export default App;
