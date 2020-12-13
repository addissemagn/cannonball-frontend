import React from 'react';
import "./Title.css";

const Title = ({ text, day }) => (
  <div className={day ? "title red" : "title white"}>
    <h1>{text}</h1>
  </div>
);

export default Title;