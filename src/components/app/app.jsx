import React from "react";
import {ConnectedMain} from "../main/main";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Login} from "../login/login";
import {ConnectedFavorites} from "../favorites/favorites";
import {ConnectedOffer} from "../offer/offer";
import {NotFound} from "../404/404";

const App = ({reviews}) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <ConnectedMain/>
      </Route>
      <Route path="/login" exact>
        <Login/>
      </Route>
      <Route path="/favorites" exact>
        <ConnectedFavorites/>
      </Route>
      <Route path="/offer/:id" exact>
        <ConnectedOffer reviews={reviews}/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export {App};
