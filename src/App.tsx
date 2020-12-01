import React from 'react';

import Landing from './pages/Landing';
import NavigationMenu from './components/NavigationMenu';

import './styles/global.css';
import Developers from './pages/Developers';
import Projects from './pages/Projects';


function App() {
  return (
    <div id="content">
      <NavigationMenu useLogo={true} />
      <Landing />
      <Developers />
      <Projects />
    </div>
  );
}

export default App;