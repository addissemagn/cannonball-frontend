import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LogoCannonball from './assets/icons/LogoCannonball';

import PageLayout from './containers/PageLayout';
import SignUpContainer from './containers/SignUpContainer';
import FrontpageContainer from './containers/FrontpageContainer';
import FaqContainer from './containers/FaqContainer';
import PaymentSuccessContainer from './containers/PaymentSuccessContainer';
import AdminDashboardContainer from './containers/AdminDashboardContainer';

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
        <div className="loading-logo">
          <LogoCannonball width="120" />
        </div>
      </div>
    )
  }

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <PageLayout step="landing" isLightTheme>
              <FrontpageContainer isLightTheme />
            </PageLayout>
          </Route>
          <Route exact path="/ticket">
            <PageLayout step="signUp">
              <SignUpContainer />
            </PageLayout>
          </Route>
          <Route exact path="/faq">
            <PageLayout step="faq" isLightTheme>
              <FaqContainer />
            </PageLayout>
          </Route>
          <Route exact path="/success">
            <PageLayout step="success" isLightTheme>
              <PaymentSuccessContainer />
            </PageLayout>
          </Route>
          <Route exact path="/admin">
            <PageLayout step="admin">
              <AdminDashboardContainer />
            </PageLayout>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
