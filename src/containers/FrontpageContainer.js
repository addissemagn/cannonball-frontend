import React from 'react';

import Button from '../components/Button';
import Countdown from '../components/Countdown';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import EventInfo from '../components/EventInfo';
import Timeline from '../components/Timeline';


const FrontpageContainer = ({ isLightTheme }) => {
  return (
    <div className="content">
      <Title text="Cannonball 2T1" isLightTheme={isLightTheme} />
      <Subtitle text="January 16, 2020" isLightTheme={isLightTheme} />
      <Countdown finalDate="2021-01-16" isLightTheme={isLightTheme} />
      <a
        href={process.env.REACT_APP_INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          text="Buy Ticket"
        />
      </a>
      <Timeline />
    </div>
  );
}

export default FrontpageContainer;
