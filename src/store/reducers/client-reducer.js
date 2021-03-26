import {City, SortOption} from "../../const";
import {createReducer} from "@reduxjs/toolkit";
import {resetMainPage, setActiveCity, setActiveOffer, setActiveSorting} from "../action";

const initialState = {
  activeCity: City.PARIS.name,
  activeSorting: SortOption.POPULAR,
  activeOfferId: -1,
};

const clientReducer = createReducer(initialState, (builder) => {
  builder.addCase(resetMainPage, (state) => {
    state.activeCity = initialState.activeCity;
    state.activeSorting = initialState.activeSorting;
  });
  builder.addCase(setActiveCity, (state, action) => {
    state.activeCity = action.payload;
  });
  builder.addCase(setActiveSorting, (state, action) => {
    state.activeSorting = action.payload;
  });
  builder.addCase(setActiveOffer, (state, action) => {
    state.activeOfferId = action.payload;
  });
});

export {clientReducer};
