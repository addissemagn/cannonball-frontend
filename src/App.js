import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconInstagram } from './assets/icons/instagram.svg';
import LogoCannonball from './assets/icons/LogoCannonball';
import Countdown from './components/Countdown';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href="/" title="Cannonball Logo">
              <LogoCannonball width="120" className="icon" />
            </a>
          </div>
          <div className="social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <IconInstagram className="icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Coming Soon</h1>
          </div>
          <Countdown finalDate="2021-01-16" />
          <a href="https://instagram.com">
            <div className="button">Find out more on Instagram</div>
          </a>
        </div>
        <div className="footer">
          <span>Questions? Well, we've got answers at <a className="underlined" href="mailto:cannonball@skule.ca" target="_blank" rel="noopener noreferrer">cannonball@skule.ca</a>.</span>
        </div>
      </div>
    );
  }
}

export default App;