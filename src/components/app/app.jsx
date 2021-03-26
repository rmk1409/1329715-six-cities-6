import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import {NotFound} from "../404/404";
import {PrivateRoute} from "../private-route/private-route";
import browserHistory from "../../browser-history";
import {Favorites} from "../favorites/favorites";
import {Login} from "../login/login";
import {Main} from "../main/main";
import {Offer} from "../offer/offer";

const App = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route path="/" exact>
        <Main/>
      </Route>
      <Route path="/login" exact>
        <Login/>
      </Route>
      <PrivateRoute exact path="/favorites" render={() => <Favorites/>}/>
      <Route path="/offer/:id" exact>
        <Offer/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  </Router>
);

export {App};
