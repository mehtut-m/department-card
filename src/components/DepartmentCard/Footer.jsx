import React from 'react';
import Share from '../../assets/icons/share.svg';
import { formatNumber } from '../../services/numberService';
import { BsPlayFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';

function Footer({ cardItem }) {
  const { likes } = cardItem;
  return (
    <>
      <div className="score-ratio-container">
        <BsPlayFill />
        <p>ดูสัดส่วนคะแนน</p>
      </div>
      <div className="interaction-container">
        <div className="like-info">
          <FaUserAlt />
          <span>{formatNumber(likes)} คนที่สนใจ</span>
        </div>
        <img src={Share} alt="share" className="share-btn" />
      </div>
    </>
  );
}

export default Footer;
