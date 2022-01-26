import React from 'react';
import SwipableBottomSheet from 'react-swipeable-bottom-sheet';
import styles from '../styles/bottomSheet.module.css';
import StartRoom from './BottomSheets/StartRoom';

const BottomSheet = ({
  sheetVisible,
  sheetTitle,
  setSheetVisible,
  setItemsVisible,
  setSheetCreateRoom,
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
        <StartRoom
          setSheetCreateRoom={setSheetCreateRoom}
          setSheetVisible={(val) => {
            setSheetVisible(val);
            setItemsVisible(true);
          }}
        />
      </div>
    </SwipableBottomSheet>
  );
};

export default BottomSheet;
