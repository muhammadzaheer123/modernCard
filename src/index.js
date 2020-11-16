import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import {createStore,applyMiddleware,combineReducers } from 'redux';
import { Provider } from 'react-redux';




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
import Work from 'views/Work/Work';
import Benefits from 'views/Benefits/Benefits';
import Gallery from 'views/Gallery/Gallery.js';
import Cart from 'views/Shop/Cart';
import CartDetails from 'views/Shop/CartDetails';
import Payment from 'views/Shop/Payment';
import reducer from '../src/Redux/Reducer/authReducer';
import Home from 'views/Home/Home';
import Card from 'views/Home/card';

var hist = createBrowserHistory();
const store = createStore(
  reducer
);
ReactDOM.render(
  <Provider store={store}>
  <Router history={hist}>
    <Switch>
    
    <Route path="/Payment" component={Payment} />
    <Route path="/Gallery" component={Gallery} />
     <Route path="/Benefits" component={Benefits} />
      <Route path="/Work" component={Work} />
      <Route path="/Contact" component={Contact} />
      <Route path="/CartDetails" component={CartDetails} />
      <Route path="/Cart" component={Cart} />
      <Route path="/Shop" component={Shop} />
      <Route path="/Privacy" component={Privacy} />
      <Route path="/FAQs" component={FAQs} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/About" component={About} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Card} />

    </Switch>
  </Router>
  </Provider>,
  document.getElementById("root")
);
