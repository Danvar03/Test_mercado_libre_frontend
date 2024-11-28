import React from 'react';
import '../styles/Home.scss';
import { icons } from '../../application/const/const';


function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__icons">
          {icons.map((item, index) => (
            <div key={index} className="home__icon">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
