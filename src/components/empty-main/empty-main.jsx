import React from "react";
import {EmptyCitiesContainer} from "../empty-cities-container/empty-cities-container";
import {Header} from "../header/header";

const EmptyMain = () => (
  <div className="page page--gray page--main">
    <Header/>
    <EmptyCitiesContainer/>
  </div>
);

export {EmptyMain};
