import React, { useState } from 'react';
import LogoCannonball from './assets/icons/LogoCannonball';
import Countdown from './components/Countdown';
import Header from './components/Header';
import Button from './components/Button';
import Title from './components/Title';
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [day, setDay] = useState(true);

  // simulates loading for 3s
  setTimeout(function(){
    setLoading(false);
  }, 1500);

  if (loading) {
    return (
      <div className="loading-card">
        <LogoCannonball width="120" />
      </div>
    )
  }

  return (
    <div className={day ? "card day" : "card night"}>
      <Header toggleDay={() => setDay(!day)} day={day}/>
      <div className="content">
        <Title text="Coming Soon" day={day}/>
        <Countdown finalDate="2021-01-16" day={day}/>
        <Button text="Find out more on Instagram" link="https://instagram.com" />
      </div>
      <div className="footer">
        <span>Questions? Well, we've got answers at <a className="underlined" href="mailto:cannonball@skule.ca" target="_blank" rel="noopener noreferrer">cannonball@skule.ca</a>.</span>
      </div>
    </div>
  );
}

export default App;