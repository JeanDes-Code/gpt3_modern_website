import React from 'react';

import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './Header.css';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Construisons Quelque Chose de Nouveau Avec GPT-3 OpenAI
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Votre Adresse Email" />
          <button type="button">Commencer</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>
            1 600 personnes ont commencé l'aventure au cours des dernières 24
            heures.
          </p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
