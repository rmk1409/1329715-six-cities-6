import React from "react";
import {EmptyCitiesContainer} from "../empty-cities-container/empty-cities-container";
import {ConnectedHeader} from "../header/header";

const EmptyMain = () => (
  <div className="page page--gray page--main">
    <ConnectedHeader/>
    <EmptyCitiesContainer/>
  </div>
);

export {EmptyMain};
