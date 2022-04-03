import React from 'react';
import './testimonials.scss';

export default function Testimonial() {
  const data = [
    {
      id: '1',
      name: 'Dr.T',
      title: 'CEO',
      img: 'https://www.drteresavasquez.com/wp-content/uploads/2019/05/DRT.jpeg',
      icon: 'assets/youtube.png',
      desc: 'lorem',
      featured: true,
    },
    {
      id: '1',
      name: 'Dr.T',
      title: 'CEO',
      img: '',
      icon: 'assets/youtube.png',
      desc: 'lorem',
      featured: true,
    },
  ];
  return (
    <div className="testimonials" id="testmonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? 'card featured' : 'card'}>
            <div className="top">
              <img src="assets/rightarrow.png" className="left" alt="" />
              <img src={d.img} className="user" alt="" />
              <img src={d.icon} className="right" alt="" />
            </div>
            <div clasName="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}
