import React from 'react';

import Button from '../components/Button';
import Countdown from '../components/Countdown';
import Title from '../components/Title';


const ComingSoonContainer = ({ isLightTheme }) => {
  return (
    <div className="content">
      <Title text="Coming Soon" isLightTheme={isLightTheme} />
      <Countdown finalDate="2021-01-16" isLightTheme={isLightTheme} />
      <a
        href={process.env.REACT_APP_INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          text="Find out more on Instagram"
        />
      </a>
    </div>
  );
}

export default ComingSoonContainer;
