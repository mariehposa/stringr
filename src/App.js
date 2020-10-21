import React from 'react';
import Navigation from './components/navigation/naviagtion';
import Header from './components/header/header';
import WhatIsStringr from './components/what_is_stringr/what_is_stringr';
import HowItWorks from './components/how_it_works/how_it_works';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <WhatIsStringr />
      <HowItWorks />
    </div>
  );
}

export default App;