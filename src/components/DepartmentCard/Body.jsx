import { formatNumber } from '../../services/numberService';
import Operator from '../../assets/icons/operator.svg';
import Badge from '../../assets/icons/badge.svg';
// import second from '../../assets/icons/';

function Body({ cardItem }) {
  const { faculty, roundSeats, score } = cardItem;

  return (
    <div className="card-body">
      <div className="round-container">
        {/* Round Info */}
        <h3>รอบที่เปิด</h3>
        <ul className="round-available-container">
          {roundSeats.map((item, index) => (
            <li
              key={index}
              className={`round-item ${item !== -1 ? 'round-active' : ''}`}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
      {/*  */}
      <div className="current-round-container">
        <h4>รอบที่ 4 : Admission</h4>
        <button className="score-edit-btn">
          <span>แก้ไขคะแนน</span>
          <img src={Operator} alt="edit-scores" />
        </button>
      </div>
      {/* My score */}
      <div className="my-score-container">
        <img src={Badge} alt="badge" className="badge-icon" />
        <div className="my-score-info">
          <span>คะแนนของคุณคือ</span>
          <h3>23,453</h3>
        </div>
      </div>

      {/* Faculty score */}
      <div className="faculty-score-container">
        {score ? (
          <>
            <div className="faculty-min">
              <h5 className="faculty-score">{formatNumber(score?.min)}</h5>
              <p className="faculty-label">คะแนนต่ำสุด 60</p>
            </div>
            <div className="faculty-avg">
              <h5 className="faculty-score">{formatNumber(score?.avg)}</h5>
              <p className="faculty-label">คะแนนเฉลี่ย 60</p>
            </div>
            <div className="faculty-max">
              <h5 className="faculty-score">{formatNumber(score?.max)}</h5>
              <p className="faculty-label">คะแนนสูงสุด 60</p>
            </div>
          </>
        ) : (
          <h4 className="unvailable-faculty">
            คณะนี้ไม่ได้เปิดให้สมัครในรอบนี้
          </h4>
        )}
      </div>
    </div>
  );
}

export default Body;
