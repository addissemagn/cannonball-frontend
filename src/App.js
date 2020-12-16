import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LogoCannonball from './assets/icons/LogoCannonball';

import PageLayout from './views/PageLayout';
import SignUpContainer from './views/SignUpContainer';
import ComingSoonContainer from './views/ComingSoonContainer';
import FaqContainer from './views/FaqContainer';

// TODO: migrate .css to use material ui makestyles
import "./App.css";
import "./Animations.css";


const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulates loading for 3s
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
    <Router>
        <Switch>
          <Route exact path="/">
            <PageLayout step="landing" isLightTheme>
              <ComingSoonContainer isLightTheme />
            </PageLayout>
          </Route>
          <Route exact path="/sign-up">
            <PageLayout step="signUp">
              <SignUpContainer />
            </PageLayout>
          </Route>
          <Route exact path="/faq">
            <PageLayout step="faq" isLightTheme>
              <FaqContainer />
            </PageLayout>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
