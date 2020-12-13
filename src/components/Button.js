import React from 'react';
import "./Button.css";

const Button = ({ text, link }) => (
  <a href={link}>
    <div className="button">{text}</div>
  </a>
);

export default Button;
