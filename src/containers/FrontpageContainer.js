import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import Button from '../components/Button';
import Countdown from '../components/Countdown';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Timeline from '../components/Timeline';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: '20px',
  },
  paper: {
    fontFamily: "Aclonica",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    ["@media (max-width:512px)"]: { // eslint-disable-line no-useless-computed-key
      marginTop: "40px",
    },
  },
}));

const FrontpageContainer = ({ isLightTheme }) => {
  const classes = useStyles();
  document.getElementById('html').className='green-bg-extend';

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Title text="Cannonball 2T1" isLightTheme={isLightTheme} />
        <Subtitle text="January 16, 2021" isLightTheme={isLightTheme} />
        <Countdown finalDate="2021-01-16" isLightTheme={isLightTheme} />
        <Timeline />
        <Link to="/ticket" className={classes.button}>
          <Button
            text="Get Ticket"
          />
        </Link>
      </div>
    </Container>
  );
}

export default FrontpageContainer;
