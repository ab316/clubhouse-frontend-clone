import React from 'react';
import {Link} from 'react-router-dom';
import exploreStyle from '../styles/explore.module.css';
import style from '../styles/profile.module.css';
import {BsAt, BsPlus, BsUpload} from 'react-icons/bs';
import {
  AiOutlineInstagram,
  AiOutlineSetting,
  AiOutlineTwitter,
} from 'react-icons/ai';

const Profile = () => {
  return (
    <>
      <div className={style.profileContainer}>
        <div className={exploreStyle.header}>
          <div className={`${exploreStyle.head} text-end mb-0`}>
            <Link to="/home">
              <img
                src="/images/arrow.png"
                alt="Back"
                className={exploreStyle.arrowIcon}
              />
            </Link>
            <div className={style.actionBtn}>
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </div>
          </div>
        </div>

        <img
          src="/images/user-img.jpg"
          alt="User"
          className={style.profileImage}
        />
        <h4>Sririam Kazi</h4>
        <p>@sram</p>
        <div className={style.follow}>
          <p>
            <span>0</span> followers
          </p>
          <p>
            <span>12</span> following
          </p>
        </div>

        <button>Add a bio</button>
        <div className="mb-4">
          <button className="mb-0">
            <AiOutlineTwitter /> Add Twitter
          </button>

          <button className="mb-0">
            <AiOutlineInstagram /> Add Instagram
          </button>
        </div>

        <div className={style.nominated}>
          <img src="/images/user-img.jpg" alt="User" />
          <div>
            <p>Joined 10 Jan 2022</p>
            <p>
              Nominated by <span>Mr. Man</span>
            </p>
          </div>
        </div>
        <p>Member of</p>
        <button className={style.addMemberBtn}>
          <BsPlus />
        </button>
      </div>
    </>
  );
};

export default Profile;
