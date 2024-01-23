import React, { useState } from 'react';
import './Offer.css';

import expresso1 from '../../assets/expresso.png';
import expresso2 from '../../assets/expresso.png';
import expresso3 from '../../assets/expresso.png';

const Offer = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cardData = [
    { image: expresso1, title: 'Expresso 1', price: 300 },
    { image: expresso2, title: 'Expresso 2', price: 350 },
    { image: expresso3, title: 'Expresso 3', price: 400 },
    { image: expresso3, title: 'Expresso 3', price: 400 },
    { image: expresso3, title: 'Expresso 3', price: 400 }
  ];

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cardData.length);
  };

  const handleBack = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + cardData.length) % cardData.length);
  };

  const renderCards = () => {
    const startCardIndex = currentCard;
    const endCardIndex = (currentCard + 2) % cardData.length;

    return cardData.slice(startCardIndex, endCardIndex + 1).map((card, index) => (
      <div key={index} className="card">
        <img src={card.image} alt={card.title} />
        <h4>{card.title}</h4>
        <h5><span id='price'>Ksh</span>{card.price}</h5>
      </div>
    ));
  };

  return (
    <>
      <h5 id='titl'>SPECIAL OFFERS</h5>
      <div className="offers-container">
        <div className="offer-title">
          <h2>Popular customer<br/>
            favorite</h2>
        </div>
        <div className="navigation-arrows">
        <div className="arrow" onClick={handleBack}>{'<'}</div>
        <div className="arrow" onClick={handleNext}>{'>'}</div>
      </div>
        <div className="card-container">
          {renderCards()}
        </div>
      </div>

      {/* Navigation buttons */}
     
    </>
  );
};

export default Offer;
