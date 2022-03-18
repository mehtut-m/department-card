import React, { useState } from 'react';
import Heart from '../../assets/icons/heart.svg';

const Header = ({ cardItem }) => {
  const { faculty, logo, name } = cardItem;
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="card-header">
      <img src={logo} alt="faculty" className="faculty-logo" />
      <div className="department-info">
        <h1>{faculty.name}</h1>
        <h2>{name}</h2>
        <p>{faculty.university.name}</p>
      </div>
      <button className="like-btn">
        <img
          src={Heart}
          alt="engineering"
          className={`${isLiked ? 'liked' : ''}`}
        />
      </button>
    </div>
  );
};

export default Header;
