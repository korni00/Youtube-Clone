import { videoList } from './videoList';
import { styled, Tooltip } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import React, { useState, useEffect } from 'react';
const MainContent = () => {
  const MainTemplate = styled('div')`
    width: 100%;
    height: 100vh;
    padding: 1rem;
    z-index: 9999999999;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
    #main_container {
      height: 320px;
      width: 340px;
      border-radius: 1rem;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(105%);
        z-index: 99999999999999999999999999999999999999999999999999999;
        background: #212121;
        #video_thumbnail {
          border-radius: 1rem 1rem 0rem 0rem;
        }
      }
    }
    #video_thumbnail {
      width: 340px;
      border-radius: 1rem;
    }
    #video_title {
      font-family: Roboto, sans-serif;
      font-size: 1rem;
      font-weight: 500;
      max-height: 4rem;
      width: 100%;
    }
    #channel_name {
      color: #aaa;
      font-size: 12px;
      font-weight: 500;
      & svg {
        height: 11px;
        width: 11px;
        background: #aaa;
        border-radius: 50%;
        color: #0f0f0f;
        margin-left: 0.4rem;
      }
    }
    #video_info {
      display: flex;
      flex-direction: row;
      gap: 0.3rem;
    }
    #video_views {
      color: #aaa;
      font-size: 12px;
      font-weight: 500;
    }
    #video_uploadtime {
      color: #aaa;
      font-size: 12px;
      font-weight: 500;
    }
    #cart_template {
      display: flex;
      flex-direction: row;
    }
    #left_container {
      display: flex;
      padding: 0rem 0.5rem;
      align-items: center;
    }
    #channel_avatar {
      height: 35px;
      width: 35px;
      border-radius: 50%;
    }
    #right_container {
      padding: 0rem 0.5rem;
      display: flex;
      flex-direction: column;
      align-itmes: center;
      justify-content: space-between;
    }

    @media screen and (max-width: 768px) {
      padding-top: 0px;
      padding-left: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      #video_title {
        font-size: 12px;
      }
      /* small screens */
      #main_container {
        height: 240px;
        width: 280px;
      }
      #video_thumbnail {
        width: 280px;
      }
      #channel_avatar {
        height: 25px;
        width: 25px;
      }
      #video_title {
        max-height: 3rem;
      }
      #video_views,
      #video_uploadtime {
        font-size: 10px;
      }
    }

    @media screen and (min-width: 768px) and (max-width: 992px) {
      /* medium screens */
      #main_container {
        height: 280px;
        width: 340px;
        transform: scale(95%);
      }
      #video_title {
        font-size: 14px;
      }
      #video_thumbnail {
        width: 340px;
      }
      #channel_avatar {
        height: 30px;
        width: 30px;
      }
      #video_title {
        max-height: 3.5rem;
      }
    }

    @media screen and (min-width: 992px) {
      /* large screens */
      #main_container {
        height: 320px;
        width: 380px;
        transform: scale(100%);
      }
      #video_thumbnail {
        width: 380px;
      }
      #channel_avatar {
        height: 35px;
        width: 35px;
      }
      #video_title {
        max-height: 4rem;
      }
    }
  `;

  return (
    <MainTemplate>
      {videoList.map((video) => (
        <div id='main_container' key={video.id}>
          <img id='video_thumbnail' src={video.vide_thumbnail} alt={video.video_title} />
          <span id='cart_template'>
            <div id='left_container'>
              <img id='channel_avatar' src={video.channel_avatar} alt={video.channel_name} />
            </div>
            <div id='right_container'>
              <h2 id='video_title'>{video.video_title}</h2>
              <p id='channel_name'>
                {video.channel_name}
                <Tooltip title='Zweryfikowany'>
                  <DoneIcon />
                </Tooltip>
              </p>
              <span id='video_info'>
                <p id='video_views'>{video.video_views} •</p>
                <p id='video_uploadtime'>{video.video_uploadtime}</p>
              </span>
            </div>
          </span>
        </div>
      ))}
    </MainTemplate>
  );
};

export default MainContent;
