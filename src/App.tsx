import React from 'react';

import './styles/global.css';

import Landing from './pages/Landing';
import Developers from './pages/Developers';
import Projects from './pages/Projects';
import Contribute from './pages/Contribute';
import NavigationMenu from './components/NavigationMenu';
import SiteFooter from './components/SiteFooter';


function App() {
  return (
    <div id="content">
      <NavigationMenu />
      <Landing />
      <Developers />
      <Projects />
      <Contribute />
      <SiteFooter />
    </div>
  );
}

export default App;