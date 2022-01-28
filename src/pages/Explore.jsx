import React from 'react';
import {DownOutlined, FireOutlined} from '@ant-design/icons';
import data from '../data/Explore.json';
import {Input} from 'antd';
import SubHeader from '../components/SubHeader';
import style from '../styles/explore.module.css';

const Explore = () => {
  const {people, conversation} = data;
  return (
    <div className={style.exploreContainer}>
      <div className={style.header}>
        <SubHeader pageTitle="EXPLORE" />
        <Input
          style={{
            backgroundColor: '#f4f4f4',
            borderRadius: '0.8em',
            padding: '0.3em 1em',
            border: 'none',
            boxShadow: 'none',
          }}
          size="large"
          placeholder="Find People and Clubs"
          prefix={
            <img src="images/search.png" alt="search" width="15px" />
          }></Input>
      </div>

      <h6>PEOPLE TO FOLLOW</h6>
      <div className={style.peopleContainer}>
        {people.map((p) => (
          <div>
            <div className="d-flex align-items-center">
              <img src="/images/user-img.jpg" alt="User" />
              <div className="ms-2">
                <h5>{p.title}</h5>
                <p>{p.description}</p>
              </div>
            </div>
            <button>Follow</button>
          </div>
        ))}

        <button className={style.showMore}>
          Show more people <DownOutlined />
        </button>
      </div>

      <h6>FIND CONVERATIONS ABOUT</h6>
      <div className="row mx-0">
        {conversation.map((c) => (
          <div className="col-6 px-2 mb-3">
            <div className={style.conversationCard}>
              <h6>
                <FireOutlined />
                {c.title}
              </h6>
              <p>{c.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
