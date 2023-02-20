import { videoList } from './videoList';
import { styled, Tooltip } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
const MainContent = () => {
  const MainTemplate = styled('div')`
    width: 100%;
    z-index: 9999999999;
    padding-top: 24px;
    padding-left: 36px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
    #main_container {
      height: 320px;
      width: 380px;
      border-radius: 1rem;
      transition: all 0.3s ease-in-out;
      transform: scale(100%);
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
      width: 380px;
      border-radius: 1rem;
    }
    #video_title {
      font-family: Roboto, sans-serif;
      font-size: 1rem;
      font-weight: 500;
      max-height: 4rem;
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
      }
    }
    #video_info {
      display: flex;
      flex-direction: row;
      gap: 1rem;
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
    }
    #channel_avatar {
      height: 35px;
      width: 35px;
      border-radius: 50%;
    }
    #right_container {
      padding: 0rem 0.5rem;
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
