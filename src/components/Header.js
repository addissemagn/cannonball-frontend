import React from 'react';
import { ReactComponent as IconFacebook } from '../assets/icons/facebook.svg';
import { ReactComponent as IconInstagram } from '../assets/icons/instagram.svg';
import LogoCannonball from '../assets/icons/LogoCannonball';
import "../App.css";
import "./Header.css";

const Header = ({ toggleDay, day }) => (
  <div className="header">
    <div className="logo">
      <a href="/" title="Cannonball Logo">
        <LogoCannonball width="120" />
      </a>
    </div>
    <div className={day ? "social red" : "social white"}>
      <span onClick={() => toggleDay()}>Sign Up</span>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <IconInstagram />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <IconFacebook />
      </a>
    </div>
  </div>
);

export default Header;
