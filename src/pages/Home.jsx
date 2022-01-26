import React, {useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import {BsGrid3X3GapFill} from 'react-icons/bs';
import Header from '../components/Header';
import DailyInfoCard from '../components/DailyInfoCard';
import RoomInfoCard from '../components/RoomInfoCard';
import style from '../styles/home.module.css';
import data from '../data/roomCard.json';
import BottomSheet from '../components/BottomSheet';

const Home = () => {
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [cardId, setCardId] = useState(1);

  return (
    <>
      <Header />
      <div className={style.homeContainer}>
        <DailyInfoCard />
        <RoomInfoCard />
      </div>
      <div className={style.actionBtn}>
        <button onClick={() => setSheetVisible(true)}>
          <AiOutlinePlus className="me-2" />
          Start a room
        </button>
        <button>
          <BsGrid3X3GapFill />
        </button>
      </div>

      <BottomSheet
        sheetTitle={'start room'}
        sheetVisible={sheetVisible}
        setSheetVisible={(val) => setSheetVisible(val)}
        setItemsVisible={(val) => setItemsVisible(val)}
        cardDetail={data.find((item) => item.id)}
        setSheetCreateRoom={(val) => {
          setLoaderVisibility(true);
          setTimeout(() => {
            setSheetCreateRoom(val);
            setLoaderVisibility(false);
          }, 1_000);
        }}
      />
    </>
  );
};

export default Home;
