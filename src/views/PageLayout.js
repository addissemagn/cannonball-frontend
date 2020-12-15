import React from 'react';
import Snowfall from 'react-snowfall'
import Header from '../components/Header';

const PageLayout = ({ children, step, isLightTheme }) => (
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
      <Snowfall
        color="white"
        snowflakeCount={250}
      />
    )}
    <div className="background"></div>
    <Header step={step} isLightTheme={isLightTheme} />

    { children }

    <div className="footer">
      <span className={step === 'faq' ? "black" : "" }>
        Questions? Well, we've got answers at{" "}
        <a
          className="underlined"
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
)

export default PageLayout;