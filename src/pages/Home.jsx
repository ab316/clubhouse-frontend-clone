import React from 'react';
import DailyInfoCard from '../components/DailyInfoCard';
import Header from '../components/Header';
import RoomInfoCard from '../components/RoomInfoCard';
import style from '../styles/home.module.css';

const Home = () => {
  return (
    <>
      <Header />
      <div className={style.homeContainer}>
        <DailyInfoCard />
        <RoomInfoCard />
      </div>
    </>
  );
};

export default Home;
