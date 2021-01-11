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
      position: 'absolute',
      top: 200,
      left:0,
      paddingBottom: '100px',
    },
  },
  underlined: {
    '&:hover': {
      borderBottom: `1px dotted #000`,
    }
  }
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
        <Countdown finalDate="2021-01-17" isLightTheme={isLightTheme} />
        <Timeline />
        <Link to="/ticket" className={classes.button}>
          <Button
            text="Get Ticket"
          />
        </Link>
        <div className="footer">
          <span className="black">
            Questions? Well, we've got answers at{" "}
            <a
              className={classes.underlined}
              href="mailto:cannonball@skule.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              cannonball@skule.ca
            </a>
            .
          </span>
        </div>
      </div>
    </Container>
  );
}

export default FrontpageContainer;
