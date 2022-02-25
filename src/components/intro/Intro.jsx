import React from 'react';
import './intro.scss';

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/logo.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div clasName="wrapper">
          <h2>Hi there</h2>
          <h1>Meseret</h1>
          <h3>
            Freelance
            <span />
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/downarrow.png" alt="" />
        </a>
      </div>
    </div>
  );
}
