import React, {useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import {BsGrid3X3GapFill} from 'react-icons/bs';
import Header from '../components/Header';
import DailyInfoCard from '../components/DailyInfoCard';
import RoomInfoCard from '../components/RoomInfoCard';
import style from '../styles/home.module.css';
import data from '../data/roomCard.json';
import newRoomData from '../data/newRoom.json';
import BottomSheet from '../components/BottomSheet';

const Home = () => {
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetStartRoomVisible, setSheetStartRoomVisible] = useState(false);
  const [sheetNewRoomVisible, setSheetNewRoomVisible] = useState(false);
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [cardId, setCardId] = useState(1);

  return (
    <>
      {loaderVisibility && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            right: '0',
            left: '0',
            bottom: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src="images/loader.gif" alt="Loader" />
        </div>
      )}
      <Header />
      <div className={style.homeContainer}>
        <DailyInfoCard />
        <RoomInfoCard />
      </div>
      <div className={style.actionBtn}>
        <button onClick={() => setSheetStartRoomVisible(true)}>
          <AiOutlinePlus className="me-2" />
          Start a room
        </button>
        <button>
          <BsGrid3X3GapFill />
        </button>
      </div>

      <BottomSheet
        sheetTitle="start room"
        sheetVisible={sheetStartRoomVisible}
        setSheetVisible={(val) => setSheetStartRoomVisible(val)}
        setItemsVisible={(val) => setItemsVisible(val)}
        cardDetail={data.find((item) => item.id)}
        setSheetCreateRoom={(val) => {
          setLoaderVisibility(true);
          setTimeout(() => {
            setSheetNewRoomVisible(val);
            setLoaderVisibility(false);
          }, 1_000);
        }}
      />

      <BottomSheet
        sheetTitle="new room"
        sheetVisible={sheetNewRoomVisible}
        setSheetVisible={(val) => setSheetNewRoomVisible(val)}
        setItemsVisible={(val) => setItemsVisible(val)}
        cardDetail={newRoomData}
      />
    </>
  );
};

export default Home;
