/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import './topbar.scss';
import { Person, Mail } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    // eslint-disable-next-line prefer-template
    // eslint-disable-next-line quotes
    // eslint-disable-next-line prefer-template
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            {' '}
            logo{' '}
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span> +240 408 1067</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>meseret1910</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

Topbar.propTypes = {
  menuOpen: PropTypes.func.isRequired,
  setMenuOpen: PropTypes.isRequired,
};
