import { Tooltip, Divider } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material';
import ListItem from './ListItem';
import ListSub from './ListSub';
//icons
import HomeIcon from '@mui/icons-material/Home';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RestoreIcon from '@mui/icons-material/Restore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TvIcon from '@mui/icons-material/Tv';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SensorsIcon from '@mui/icons-material/Sensors';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
const Categories = () => {
  const CategoriesHolder = styled('div')`
    width: 100%;
    z-index: 99;
    display: flex;
    padding: 12px;
    #sidebar_container {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      & h5 {
        font-weight: 200;
        line-height: 1.1rem;
        color: #aaa;
        width: 200px;
      }
      & h6 {
        color: #717171;
      }
    }
    .MuiDivider-root {
      background: rgba(255, 255, 255, 10%);
      width: 120%;
      margin-left: -20%;
    }
    & h4 {
      font-weight: 200;
      padding-left: 0.35rem;
    }
    #Subscription {
      margin-top: 0.5rem;
    }
    @media (max-width: 850px) {
      #Subscription,
      & h4,
      & h5 {
        display: none;
      }
    }
  `;

  return (
    <CategoriesHolder>
      <div id='sidebar_container'>
        <ListItem Text='Główna' Icon={<HomeIcon />} />
        <ListItem Text='Shorts' Icon={<AdUnitsIcon />} />
        <ListItem Text='Subskrypcje' Icon={<SubscriptionsIcon />} />
        <Divider />
        <ListItem Text='Biblioteka' Icon={<VideoLibraryIcon />} />
        <ListItem Text='Historia' Icon={<RestoreIcon />} />
        <ListItem Text='Twoje Filmy' Icon={<PlayArrowIcon />} />
        <ListItem Text='Do obejrzenia' Icon={<ScheduleIcon />} />
        <ListItem Text='Polubione filmy' Icon={<ThumbUpOffAltIcon />} />
        <ListItem Text='Pokaż więcej' Icon={<KeyboardArrowDownIcon />} />
        <Divider />
        <h4 id='Subscription'>Subskrypcje</h4>
        <ListSub Icon='https://cdn.discordapp.com/emojis/1050427266934521876.webp' Text='Jasper' New={true} />
        <ListSub Icon='https://cdn.7tv.app/emote/61c71693a5b6fc4c22c18203/4x.webp' Text='Płock programuje' New={true} />
        <ListSub Icon='https://cdn.7tv.app/emote/61c71693a5b6fc4c22c18203/4x.webp' Text='Płock programuje' New={true} />
        <ListSub Icon='https://cdn.7tv.app/emote/61c71693a5b6fc4c22c18203/4x.webp' Text='Płock programuje' New={true} />

        <ListSub
          Icon='https://yt3.googleusercontent.com/6PLH4W9K-_VnkCKqszsgBHPsEZOd0ODmbEqOKkklh9g5Lgdba7zGAF05u_ByyyM8-vPsWrgr7g=s88-c-k-c0x00ffffff-no-rj'
          Text='TV Tech'
          New={true}
        />
        <ListSub
          Icon='https://yt3.googleusercontent.com/ytc/AL5GRJUfhQdJS6n-YJtsAf-ouS2myDavDOq_zXBfebal3Q=s176-c-k-c0x00ffffff-no-rj-mo'
          Text='MrBeast'
          New={true}
        />
        <ListSub
          Icon='https://yt3.ggpht.com/TASf99Oe8tliGLeSwUSdjNgpTRKs14fQt4RubTGd8pNzo5eYPXx7CLXPpzgY5iwFMFfXGzpc1g=s88-c-k-c0x00ffffff-no-rj'
          Text='Law&Crime Net...'
          Live={true}
        />
        <ListItem Text='Pokaż Jeszcze 99' Icon={<KeyboardArrowDownIcon />} />
        <Divider />
        <h4 id='Subscription'>Odkrywaj</h4>
        <ListItem Text='Na czasie' Icon={<WhatshotIcon />} />
        <ListItem Text='Muzyka' Icon={<MusicNoteIcon />} />
        <ListItem Text='Filmy' Icon={<TvIcon />} />
        <ListItem Text='Na Żywo' Icon={<SensorsIcon />} />
        <ListItem Text='Gry' Icon={<SportsEsportsIcon />} />
        <ListItem Text='Wiadomości' Icon={<NewspaperIcon />} />
        <ListItem Text='Sport' Icon={<SportsFootballIcon />} />
        <Divider />
        <h4 id='Subscription'>Więcej z YouTube</h4>
        <ListSub
          Text='Youtube Premium'
          Icon='https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png'
        />
        <ListSub
          Text='Studio tworców'
          Icon='https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png'
        />
        <ListSub
          Text='Youtube Music'
          Icon='https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png'
        />
        <ListSub
          Text='Youtube Kids'
          Icon='https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png'
        />
        <ListSub
          Text='Youtube TV'
          Icon='https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png'
        />
        <Divider />
        <ListItem Text='Ustawienia' Icon={<SensorsIcon />} />
        <ListItem Text='Historia raportów' Icon={<SportsEsportsIcon />} />
        <ListItem Text='Pomoc' Icon={<NewspaperIcon />} />
        <ListItem Text='Prześlij opinię' Icon={<SportsFootballIcon />} />
        <Divider />
        <h5>
          Informacje Centrum prasowe Prawa autorskie Skontaktuj się z nami Twórcy Reklamy Deweloperzy Warunki Prywatność
          Zasady i bezpieczeństwo Jak działa YouTube Przetestuj nowe funkcje
        </h5>
        <h6>© 2023 Google LLC</h6>
      </div>
    </CategoriesHolder>
  );
};

export default Categories;
