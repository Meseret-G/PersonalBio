import React from 'react';
import './topbar.scss';

export default function Topbar() {
  return (
    <div className="topbar" id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro"> logo </a>
        </div>
        <div className="right">This is right</div>
      </div>
    </div>
  );
}
