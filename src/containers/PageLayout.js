import React from 'react';
import Snowfall from 'react-snowfall'
import Header from '../components/Header';

const PageLayout = ({ children, step, isLightTheme }) => {
  const mobileSize = window.matchMedia("(max-width: 512px)").matches;

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
    </div>
  );
};

export default PageLayout;