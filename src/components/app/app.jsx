import React from "react";
import {Main} from "../main/main";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Login} from "../login/login";
import {Favorites} from "../favorites/favorites";
import {Offer} from "../offer/offer";
import {NotFound} from "../404/404";

const App = ({offerQuantity}) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Main offerQuantity={offerQuantity}/>
      </Route>
      <Route path="/login" exact>
        <Login/>
      </Route>
      <Route path="/favorites" exact>
        <Favorites/>
      </Route>
      <Route path="/offer/:id" exact>
        <Offer/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  offerQuantity: PropTypes.number.isRequired
};

export {App};
