import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';

import style from '../styles/phoneConfirmation.module.css';

const PhoneConfirmation = () => {
  const [value, setValue] = useState(undefined);
  return (
    <div className={style.phoneConfirmationContainer}>
      <Link to="/" className={style.backBtn}>
        <img src="/images/arrow.png" alt="Go Back" />
      </Link>
      <h1>Enter your phone</h1>
      <PhoneInput
        international
        defaultCountry="SE"
        value={value}
        onChange={setValue}
      />
      <p>
        By entering your number, you're agreeing to our terms{' '}
        <span>Terms of Service and Privacy Policy. </span>
        Thanks!
      </p>
      <Link to="/code_confirm" className="primaryBtn d-flex align-items-center">
        Next
        <img src="/images/nextArrowIcon.svg" alt="Next" className="ms-1" />
      </Link>
    </div>
  );
};

export default PhoneConfirmation;
