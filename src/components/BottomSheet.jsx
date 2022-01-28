import React from 'react';
import SwipableBottomSheet from 'react-swipeable-bottom-sheet';
import styles from '../styles/bottomSheet.module.css';
import StartRoom from './BottomSheets/StartRoom';
import NewRoom from './BottomSheets/NewRoom';

const BottomSheet = ({
  sheetVisible,
  sheetTitle,
  setSheetVisible,
  setItemsVisible,
  setSheetCreateRoom,
  cardDetail,
}) => {
  return (
    <SwipableBottomSheet
      bodyStyle={{width: '100%', maxWidth: '500px', margin: '0 auto'}}
      open={sheetVisible}
      onChange={() => {
        setSheetVisible(!sheetVisible);
        setItemsVisible(true);
      }}
      fullScreen={sheetTitle === 'room detail' ? true : false}>
      <div
        className={styles.bottomSheetContainer}
        style={{
          backgroundColor: sheetTitle === 'profile' ? 'transparent' : '',
        }}>
        {sheetTitle === 'start room' && (
          <StartRoom
            setSheetCreateRoom={setSheetCreateRoom}
            setSheetVisible={(val) => {
              setSheetVisible(val);
              setItemsVisible(true);
            }}
          />
        )}

        {sheetTitle === 'new room' && (
          <NewRoom
            cardDetail={cardDetail}
            setSheetVisible={(val) => {
              setSheetVisible(val);
              setItemsVisible(true);
            }}
          />
        )}
      </div>
    </SwipableBottomSheet>
  );
};

export default BottomSheet;
