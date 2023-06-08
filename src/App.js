import React from 'react';
import { Header } from './Header';
import { Header2 } from './Header2';
import HeroSection from './HeroSection';
import HeroSection2 from './HeroSection2';
import Footer from './Footer';


function App() {
  const parentComponentStyles = {
    overflowY: 'scroll',
    height: '100vh',
    position: 'relative',
  };

  return (
    <div style={parentComponentStyles}>
      <div className="sticky top-0 z-50">
        <Header />
        <Header2 />
      </div>
      <HeroSection />
      <HeroSection2 />
      <Footer />
    </div>
  );
}
export default App;
