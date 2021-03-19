import React from "react";
import {Main} from "../main/main";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Login} from "../login/login";
import {Favorites} from "../favorites/favorites";
import {Offer} from "../offer/offer";
import {NotFound} from "../404/404";

const App = ({offers, reviews}) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Main offers={offers}/>
      </Route>
      <Route path="/login" exact>
        <Login/>
      </Route>
      <Route path="/favorites" exact>
        <Favorites/>
      </Route>
      <Route path="/offer/:id" exact>
        <Offer offers={offers} reviews={reviews}/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};

export {App};
