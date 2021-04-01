import React from "react";
import {Route, Switch} from "react-router-dom";
import {NotFound} from "../404/404";
import {PrivateRoute} from "../private-route/private-route";
import {Favorites} from "../favorites/favorites";
import {Login} from "../login/login";
import {Main} from "../main/main";
import {Offer} from "../offer/offer";
import {Routing} from "../../const";

const App = () => (
  <Switch>
    <Route path={Routing.ROOT} exact>
      <Main/>
    </Route>
    <Route path={Routing.LOGIN} exact>
      <Login/>
    </Route>
    <PrivateRoute exact path={Routing.FAVORITES} render={() => <Favorites/>}/>
    <Route path={`${Routing.OFFER}/:id`} exact>
      <Offer/>
    </Route>
    <Route>
      <NotFound/>
    </Route>
  </Switch>
);

export {App};
