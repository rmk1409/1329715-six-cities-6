import {combineReducers} from "@reduxjs/toolkit";
import {clientReducer} from "./client-reducer";
import {serverReducer} from "./server-reducer";

const NameSpace = {
  CLIENT: `CLIENT`,
  SERVER: `SERVER`,
};

const reducer = combineReducers({
  [NameSpace.CLIENT]: clientReducer,
  [NameSpace.SERVER]: serverReducer,
});

export {reducer, NameSpace};
