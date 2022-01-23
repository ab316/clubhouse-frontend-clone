import React from 'react';
import {Link} from 'react-router-dom';
import style from '../styles/header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/explore">
        <img src="/images/search.png" alt="Search" />
      </Link>
      <nav className={style.nav}>
        <Link to="/friends_invite">
          <img src="/images/invite.png" alt="Invite" />
        </Link>

        <Link to="/upcoming">
          <img src="/images/calendar.png" alt="Calendar" />
        </Link>

        <Link to="/activity">
          <img src="/images/noti.png" alt="Activity" />
        </Link>

        <Link to="/profile">
          <img src="/images/b1.png" alt="Profile" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
