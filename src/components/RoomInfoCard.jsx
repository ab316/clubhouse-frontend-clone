import React from 'react';
import data from '../data/roomCard.json';
import {BsChatDots, BsChatDotsFill, BsFillPersonFill} from 'react-icons/bs';
import styles from '../styles/roomInfoCard.module.css';

const RoomInfoCard = () => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <div>
            <div className={styles.roomCardContainer}>
              <h6>{item.title}</h6>
              <h2>{item.sub_title}</h2>
              <div className={styles.roomMembers}>
                <div>
                  <img src="images/user-img.jpg" alt="user" />
                  <img src="images/user-img2.jpg" alt="user" />
                </div>
                <div>
                  {item.members.map((member) => (
                    <p key={member.first_name}>
                      {member.first_name} {member.last_name} <BsChatDots />
                    </p>
                  ))}
                  <p className="d-flex align-items-center">
                    <span className="me-2">1.8</span>
                    <BsFillPersonFill />
                    <span className="mx-2"></span>{' '}
                    <span className="me-2">5</span> <BsChatDotsFill />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomInfoCard;
