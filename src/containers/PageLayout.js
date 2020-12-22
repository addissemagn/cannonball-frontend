import React from 'react';
import Snowfall from 'react-snowfall'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => ({
  underlined: {
    '&:hover': {
      borderBottom: (props) => `1px dotted ${props.isLightTheme ? '#000' : '#fff'}`,
    }
  }
}));

const PageLayout = ({ children, step, isLightTheme }) => {
  const mobileSize = window.matchMedia("(max-width: 512px)").matches;
  const classes = useStyles({ isLightTheme });

  return (
    <div className={`card bg-${step}`}>
      {step === "signUp" && (
        <>
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="moon"></div>
          <div className="castle"></div>
        </>
      )}
      {step === "faq" && (
        <Snowfall color="white" snowflakeCount={mobileSize ? 80 : 250} />
      )}
      <div className="background"></div>
      <Header step={step} isLightTheme={isLightTheme} />

      {children}

      {/* TODO: fix footer for signUp page */}
      {/* this code is getting real wonky, sorry if ur reading this */}
      {step !== "signUp" && step !== "landing" && (
        <div className="footer">
          <span className={isLightTheme ? "black" : ""}>
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
      )}
    </div>
  );
};

export default PageLayout;