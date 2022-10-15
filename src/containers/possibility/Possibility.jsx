import React from 'react';

import possibilityImage from '../../assets/possibility.png';
import './Possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Demander un accès anticipé pour commencer</h4>
        <h1 className="gradient__text">
          Des possibilités qui dépassent votre imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis.
        </p>
        <h4>Demander un accès anticipé pour commencer</h4>
      </div>
    </div>
  );
};

export default Possibility;
