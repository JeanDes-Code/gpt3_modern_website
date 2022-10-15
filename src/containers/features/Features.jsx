import React from 'react';
import { Feature } from '../../components';

import './Features.css';

const featuresData = [
  {
    title: "Améliorer votre image d'expert",
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  },
  {
    title: 'Créer de nouvelles tendances',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  },
  {
    title: 'Offrir un service client fiable',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  },
  {
    title: "Prouver enfin que Michael Jackson n'est pas mort",
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  },
];

const Features = () => {
  return (
    <div className=" section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          L'Avenir Commence Aujourd'hui. Entrez Dans L'Avenir Dès Maintenant Et
          Faites-En Une Réalité.
        </h1>
        <p>Demander un accès anticipé pour commencer</p>
      </div>
      <div className="gpt-3__features-container">
        {featuresData.map(({ title, text }, i) => (
          <Feature key={i} title={title} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Features;
