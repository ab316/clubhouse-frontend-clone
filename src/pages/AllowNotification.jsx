import React from 'react';
import {Link} from 'react-router-dom';
import style from '../styles/phoneConfirmation.module.css';

const AllowNotification = () => {
  return (
    <div className={style.phoneConfirmationContainer}>
      <Link to="/invite" className={style.backBtn}>
        <img src="/images/arrow.png" alt="Back" />
      </Link>
      <div className="text-center">
        <h1 className="mb-4">Last Important step!</h1>
        <h1 className="mb-3">
          Enable notifications to know where people are talking
        </h1>
        <div class={style.notificationContainer}>
          <div className="p-3">
            <h3>Clubhouse Would Like to Send You Notifications</h3>
            <p>Notifications may include alerts, sounds and, icon badges</p>
          </div>
          <div className={style.actionBtn}>
            <Link to="/">Don't Allow</Link>
            <Link to="/">Allow</Link>
            <img
              src="/images/handIcon.svg"
              alt="Hand"
              className={style.handIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllowNotification;
