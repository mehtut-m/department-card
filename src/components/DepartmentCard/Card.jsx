import React from 'react';
import Header from './Header';
import './Card.css';
import Body from './Body';
import Footer from './Footer';

function Card({ cardItem }) {
  return (
    <div className="department-card">
      <Header cardItem={cardItem} />
      <Body cardItem={cardItem} />
      <Footer cardItem={cardItem} />
    </div>
  );
}

export default Card;
