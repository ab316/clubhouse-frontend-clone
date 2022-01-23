import React from 'react';
import DailyInfoCard from '../components/DailyInfoCard';
import Header from '../components/Header';
import style from '../styles/home.module.css';

const Home = () => {
  return (
    <>
      <Header />
      <div className={style.homeContainer}>
        <DailyInfoCard />
      </div>
    </>
  );
};

export default Home;
