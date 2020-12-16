import React from 'react';

import Button from '../components/Button';
import Countdown from '../components/Countdown';
import Title from '../components/Title';


const ComingSoonContainer = ({ isLightTheme }) => {
  return (
    <div className="content">
      <Title text="Coming Soon" isLightTheme={isLightTheme} />
      <Countdown finalDate="2021-01-16" isLightTheme={isLightTheme} />
      <Button
        text="Find out more on Instagram"
        link="https://instagram.com"
      />
    </div>
  )
}

export default ComingSoonContainer;
