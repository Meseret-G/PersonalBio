/* eslint-disable react/self-closing-comp */
import React, { useEffect, useRef } from 'react';
import './intro.scss';
import { init } from 'ityped';

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Designer', 'Product Owner'],
    });
  }, []);
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
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/downarrow.png" alt="" />
        </a>
      </div>
    </div>
  );
}
