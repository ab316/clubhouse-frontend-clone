import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';

import style from '../styles/phoneConfirmation.module.css';

const PhoneConfirmation = () => {
  const [value, setValue] = useState(undefined);
  return (
    <div className={style.phoneConfirmationContainer}>
      <h1>Enter your phone</h1>
      <PhoneInput
        international
        defaultCountry="SE"
        value={value}
        onChange={(v) => setValue(v)}
      />
      <p>
        By entering your number, you're agreeing to our terms{' '}
        <span>Terms of Service and Privacy Policy. </span>
        Thanks!
      </p>
    </div>
  );
};

export default PhoneConfirmation;
