import React from 'react';
import Navigation from './components/navigation/naviagtion';
import Header from './components/header/header';
import WhatIsStringr from './components/what_is_stringr/what_is_stringr';
import HowItWorks from './components/how_it_works/how_it_works';
import AboutUs from './components/about_us/about_us';
import Faq from './components/faq/faq';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <WhatIsStringr />
      <HowItWorks />
      <AboutUs />
      <Faq />
    </div>
  );
}

export default App;