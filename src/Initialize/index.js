import React, { useState } from 'react';
import './apps.scss';
import Contact from '../components/contact/Contact';
import Intro from '../components/intro/Intro';
import Portfolio from '../components/portfolio/Portfolio';
import Testimonial from '../components/testimonials/Testimonial';
import Topbar from '../components/topbar/Topbar';
import Works from '../components/works/Works';
import Menu from '../components/Menu/Menu';

function Initialize() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default Initialize;
