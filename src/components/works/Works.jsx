/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';

import './works.scss';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: '1',
      icon: './assets/logo.PNG',
      title: 'Front end',
      desc: 'desc',
    },
    {
      id: '2',
      icon: './assets/rightarrow.png',
      title: 'Back end',
      desc: 'what?',
    },
  ];
  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <img
        src="assets/rightarrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick('left')}
      />
      <img
        src="assets/rightarrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick('right')}
      />
      <div
        className="slider"
        style={{ trasform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src="assets/logo.PNG" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
