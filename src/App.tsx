import React from 'react';

import Landing from './pages/Landing';
import NavigationMenu from './components/NavigationMenu';

import './styles/global.css';
import Developers from './pages/Developers';
import Projects from './pages/Projects';
import Contribute from './pages/Contribute';


function App() {
  return (
    <div id="content">
      <NavigationMenu useLogo={true} />
      <Landing />
      <Developers />
      <Projects />
      <Contribute />
    </div>
  );
}

export default App;