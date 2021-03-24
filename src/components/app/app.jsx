import React from "react";
import {ConnectedMain} from "../main/main";
import PropTypes from "prop-types";
import {Router, Route, Switch} from "react-router-dom";
import {ConnectedLogin} from "../login/login";
import {ConnectedFavorites} from "../favorites/favorites";
import {ConnectedOffer} from "../offer/offer";
import {NotFound} from "../404/404";
import {ConnectedPrivateRoute} from "../private-route/private-route";
import browserHistory from "../../browser-history";

const App = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route path="/" exact>
        <ConnectedMain/>
      </Route>
      <Route path="/login" exact>
        <ConnectedLogin/>
      </Route>
      <ConnectedPrivateRoute exact path="/favorites" render={() => <ConnectedFavorites/>}/>
      <Route path="/offer/:id" exact>
        <ConnectedOffer/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  </Router>
);

export {App};
