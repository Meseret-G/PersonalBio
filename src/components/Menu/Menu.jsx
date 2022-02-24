/* eslint-disable quotes */
import React from 'react';
import PropTypes from 'prop-types';
import './menu.scss';

export default function Menu({ menuOpen }) {
  return (
    // eslint-disable-next-line prefer-template
    // eslint-disable-next-line quotes
    // eslint-disable-next-line prefer-template
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li>
          <a href="#intro"> Home </a>
        </li>
        <li>
          <a href="#portfolio"> Portfolio </a>
        </li>
        <li>
          <a href="#works"> Works </a>
        </li>
        <li>
          <a href="#testimonials"> Testimonials </a>
        </li>
        <li>
          <a href="#contact"> Contacts </a>
        </li>
      </ul>
    </div>
  );
}

Menu.propTypes = {
  menuOpen: PropTypes.func.isRequired,
};
