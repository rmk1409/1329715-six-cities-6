import React from "react";
import {Header} from "../header/header";
import {EmptyCitiesContainer} from "../empty-cities-container/empty-cities-container";

const EmptyMain = () => (
  <div className="page page--gray page--main">
    <Header/>
    <EmptyCitiesContainer/>
  </div>
);

export {EmptyMain};
