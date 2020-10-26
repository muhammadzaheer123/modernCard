import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import FAQs from "views/FAQ/FAQs.js";
import About from "views/About/About";
import Privacy from "views/PrivacyPolicy/PrivacyPolicy.js";
import Shop from 'views/Shop/Shop';
import Contact from 'views/Contact/Contact';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path="/Contact" component={Contact} />
      <Route path="/Shop" component={Shop} />
      <Route path="/Privacy" component={Privacy} />
      <Route path="/FAQs" component={FAQs} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/About" component={About} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />

    </Switch>
  </Router>,
  document.getElementById("root")
);
