import React, { useState } from 'react';
import Navigation, { BurgerMenu } from './components/navigation/navigation';
import Header from './components/header/header';
import WhatIsStringr from './components/what_is_stringr/what_is_stringr';
import HowItWorks from './components/how_it_works/how_it_works';
import AboutUs from './components/about_us/about_us';
import Faq from './components/faq/faq';
import Footer from './components/footer/footer';
import LearnMore from './components/learn_more/learn_more';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <Navigation />
      <BurgerMenu isOpen = {isMenuOpen} onStateChange = {(state) => setMenuOpen(state.isOpen)} setMenuOpen={setMenuOpen} />
      <Header />
      <WhatIsStringr />
      <HowItWorks />
      <LearnMore />
      <AboutUs />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;