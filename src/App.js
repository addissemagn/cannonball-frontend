import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LogoCannonball from './assets/icons/LogoCannonball';
import { ReactComponent as IconStripe } from './assets/icons/stripe.svg';

import PageLayout from './containers/PageLayout';
import SignUpContainer from './containers/SignUpContainer';
import FrontpageContainer from './containers/FrontpageContainer';
import FaqContainer from './containers/FaqContainer';
import AdventureContainer from './containers/AdventureContainer';
import PaymentSuccessContainer from './containers/PaymentSuccessContainer';
import AdminDashboardContainer from './containers/AdminDashboardContainer';

// TODO: migrate .css to use material ui makestyles
import "./App.css";
import "./Animations.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [redirectingStripe, setRedirectingStripe] = useState(false);

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

  if (redirectingStripe) {
    return (
      <div className="loading-card">
        <div className="loading-logo">
          <IconStripe width="100px"/>
        </div>
      </div>
    )
  }

  const SuccessComponent = (props) => (
    <PageLayout step="success" isLightTheme>
      <PaymentSuccessContainer params={props.location.search} />
    </PageLayout>
  );

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
            <SignUpContainer setRedirecting={setRedirectingStripe}/>
          </PageLayout>
        </Route>
        <Route exact path="/faq">
          <PageLayout step="faq" isLightTheme>
            <FaqContainer />
          </PageLayout>
        </Route>
        <Route exact path="/success" component={SuccessComponent}>
        </Route>
        <Route exact path="/admin">
          <PageLayout step="admin">
            <AdminDashboardContainer />
          </PageLayout>
        </Route>
        <Route exact path="/adventure">
          <PageLayout step="adventure" isLightTheme>
            <AdventureContainer />
          </PageLayout>
        </Route>
        <Route
          path="/quiz"
          component={() => {
            window.location.href = process.env.REACT_APP_BUZZFEED;
            return null;
          }}
        />
        <Route
          path="/contest"
          component={() => {
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdtsiAhXpPuB6p59uOjJS2gbIk6ZXf3tAAV6OnGcF2KeWlhPw/closedform";
            return null;
          }}
        />
        <Route
          path="/spotify"
          component={() => {
            window.location.href = "https://open.spotify.com/playlist/3kykGiLWKEiEcGCMxDbsVu?si=Rwe-Qm95Q8iwPj8TzkCcYg";
            return null;
          }}
        />
        <Route
          path="/discord"
          component={() => {
            window.location.href = "https://discord.gg/Dw5Q24KvwK";
            return null;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
