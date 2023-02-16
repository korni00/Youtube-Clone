import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Header from './components/Header';
import Categories from './components/Categories';
function App() {
  return (
    <SimpleBarReact style={{ maxHeight: '100vh' }}>
      <Header />
      <div style={{ width: '240px', display: 'flex', flexDirection: 'row' }}>
        <SimpleBarReact style={{ maxHeight: '94vh', width: '240px', overflowX: 'hidden' }}>
          <Categories />
        </SimpleBarReact>
      </div>
    </SimpleBarReact>
  );
}

export default App;
