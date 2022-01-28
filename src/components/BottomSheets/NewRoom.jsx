import React, {useState} from 'react';
import {AiOutlineFile, AiOutlinePlus} from 'react-icons/ai';
import {BsMicMuteFill, BsMicFill} from 'react-icons/bs';
import style from '../../styles/newRoom.module.css';

const NewRoom = ({cardDetail, setSheetVisible}) => {
  const [micMuteVisible, setMicMuteVisible] = useState(false);
  const [itemVisible, setItemVisible] = useState(true);

  return (
    <>
      <div className={style.roomDetailContainer}>
        <div className={style.head}>
          <div className="d-flex align-items-center">
            <a href="#" onClick={() => setSheetVisible(false)}>
              <img
                src="images/arrow.png"
                alt="arrow"
                className={style.arrowIcon}
              />
            </a>
            <span>Hallway</span>
          </div>
          <div>
            <AiOutlineFile />
            <img
              src="images/user-img.jpg"
              alt="User"
              className={style.profileImg}
            />
          </div>
        </div>

        <div className={style.roomDetailCard}>
          <div
            className="d-flex align-items-center justify-content-between flex-wrap"
            style={{padding: '0.5em 1em'}}>
            {cardDetail.members.map((member) => (
              <div className={style.memberContainer}>
                {micMuteVisible ? (
                  <div className={style.audioIcon}>
                    <BsMicMuteFill />
                  </div>
                ) : (
                  ''
                )}
                <img src="/images/user-img.jpg" alt="User" />
                <p>
                  <span>*</span>
                  {member.first_name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={style.footer}>
          <button onClick={() => setSheetVisible(false)}>
            <img src="/images/hand-peace.png" alt="Hand" /> Leave Quietly
          </button>
          <div>
            <button>
              <AiOutlinePlus />
            </button>

            <button>
              <img src="images/stopHandIcon.png" alt="Stop" />
            </button>

            <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
              {micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewRoom;
