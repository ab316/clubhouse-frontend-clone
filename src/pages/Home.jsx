import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import {BsGrid3X3GapFill} from 'react-icons/bs';
import Header from '../components/Header';
import DailyInfoCard from '../components/DailyInfoCard';
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
      <div className={style.actionBtn}>
        <button>
          <AiOutlinePlus className="me-2" />
          Start a room
        </button>
        <button>
          <BsGrid3X3GapFill />
        </button>
      </div>
    </>
  );
};

export default Home;
