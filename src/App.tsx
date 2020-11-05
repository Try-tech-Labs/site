import React from 'react';

import Landing from './pages/Landing';
import NavigationMenu from './components/NavigationMenu';

import './styles/global.css';
import Developers from './pages/Developers';



function App() {
  return (
    <div id="content">
      <NavigationMenu useLogo={true} />
      <Landing />
      <Developers />
    </div>
  );
}

export default App;