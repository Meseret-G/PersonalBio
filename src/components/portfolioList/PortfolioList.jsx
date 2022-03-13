/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import './portfoliolist.scss';

export default function PortfolioList({
  id, title, active, setSelected,
}) {
  return (
    <li
      className={active ? 'portfolioList active' : 'portfolioList'}
      onClick={() => setSelected(id)}
    >
      {' '}
      {title}{' '}
    </li>
  );
}
PortfolioList.propTypes = {
  title: PropTypes.string,
};
PortfolioList.defaultProps = { title: {} };
