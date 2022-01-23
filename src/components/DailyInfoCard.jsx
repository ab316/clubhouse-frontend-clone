import React from 'react';
import data from '../data/dailyCard.json';
import styles from '../styles/dailyInfoCard.module.css';

const DailyInfoCard = () => {
  return (
    <div className={styles.dailyCard}>
      {data.map((item) => (
        <div key={item.id}>
          <span>{item.time}</span>
          <div>
            <span>{item.title}</span>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyInfoCard;
