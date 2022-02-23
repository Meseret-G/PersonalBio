import React from 'react';
import './apps.scss';
import Contact from '../components/contact/Contact';
import Intro from '../components/intro/Intro';
import Portfolio from '../components/portfolio/Portfolio';
import Testimonial from '../components/testimonials/Testimonial';
import Topbar from '../components/topbar/Topbar';
import Works from '../components/works/Works';

function Initialize() {
  return (
    <div className="app">
      <Topbar />
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
