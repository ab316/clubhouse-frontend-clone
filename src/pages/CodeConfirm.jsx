import React from 'react';
import {Link} from 'react-router-dom';
import style from '../styles/phoneConfirmation.module.css';

const CodeConfirm = () => {
  return (
    <div className={style.phoneConfirmationContainer}>
      <Link to="/invite" className={style.backBtn}>
        <img src="/images/arrow.png" alt="Back" />
      </Link>
      <div className="text-center">
        <h1 style={{width: '100%', maxWidth: '200px', marginBottom: '1em'}}>
          Enter the code we just texted you
        </h1>
        <input
          type="text"
          style={{
            width: '100%',
            border: 'none',
            textAlign: 'center',
            outline: 'none',
          }}
        />
        <p className="mt-2">
          Didn't receive it? <span>Tap to resend.</span>
        </p>
      </div>
      <Link
        to="/allow_notification"
        className="primaryBtn d-flex align-items-center">
        Next <img src="images/nextArrowIcon.svg" alt="Next" className="ms-1" />
      </Link>
    </div>
  );
};

export default CodeConfirm;
