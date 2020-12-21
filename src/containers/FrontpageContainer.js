import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import Button from '../components/Button';
import Countdown from '../components/Countdown';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Timeline from '../components/Timeline';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: '20px',
  }
}));

const FrontpageContainer = ({ isLightTheme }) => {
  const classes = useStyles();
  document.getElementById('html').className='green-bg-extend';

  return (
    <div className="content">
      <Title text="Cannonball 2T1" isLightTheme={isLightTheme} />
      <Subtitle text="January 16, 2021" isLightTheme={isLightTheme} />
      <Countdown finalDate="2021-01-16" isLightTheme={isLightTheme} />
      <Timeline />
      <Link to="/sign-up" className={classes.button}>
        <Button
          text="Buy Ticket"
        />
      </Link>
    </div>
  );
}

export default FrontpageContainer;
