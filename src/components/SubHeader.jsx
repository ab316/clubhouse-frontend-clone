import React from 'react';
import {Link} from 'react-router-dom';
import style from '../styles/explore.module.css';

const SubHeader = ({pageTitle}) => {
  return (
    <div className={style.head}>
      <Link to="/home">
        <img src="/images/arrow.png" alt="Home" />
      </Link>
      <h3>{pageTitle}</h3>
    </div>
  );
};

export default SubHeader;
