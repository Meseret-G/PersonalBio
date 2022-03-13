import React, { useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web App',
    },
    {
      id: 'mobile',
      title: 'Mobile App',
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1> Portfolio</h1>
      <ul>
        {' '}
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQy9LSUzRzVbHXkXNjPPLAWGNo6yTxjG1Mzg&usqp=CAU"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQy9LSUzRzVbHXkXNjPPLAWGNo6yTxjG1Mzg&usqp=CAU"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQy9LSUzRzVbHXkXNjPPLAWGNo6yTxjG1Mzg&usqp=CAU"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQy9LSUzRzVbHXkXNjPPLAWGNo6yTxjG1Mzg&usqp=CAU"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
