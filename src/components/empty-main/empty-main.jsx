import React from "react";
import {EmptyCitiesContainer} from "../empty-cities-container/empty-cities-container";
import {MemoHeader} from "../header/header";

const EmptyMain = () => (
  <div className="page page--gray page--main" data-testid="page-main">
    <MemoHeader/>
    <EmptyCitiesContainer/>
  </div>
);

export {EmptyMain};
