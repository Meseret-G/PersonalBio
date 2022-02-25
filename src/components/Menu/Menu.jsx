/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable quotes */
import React from 'react';
import PropTypes from 'prop-types';
import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    // eslint-disable-next-line prefer-template
    // eslint-disable-next-line quotes
    // eslint-disable-next-line prefer-template
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contacts</a>
        </li>
      </ul>
    </div>
  );
}

Menu.propTypes = {
  menuOpen: PropTypes.func.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
