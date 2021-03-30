import {clientReducer, initialState} from "./client-reducer";
import {resetMainPage, setActiveCity, setActiveOffer, setActiveSorting} from "../action";

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(clientReducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should reset main page`, () => {
    const state = {...initialState, activeCity: `some-city`, activeSorting: `some-sorting`};
    expect(clientReducer(state, resetMainPage())).toEqual(initialState);
  });

  it(`Reducer should set given active city`, () => {
    const newActiveCity = `some-city`;
    const expectedState = {...initialState, activeCity: newActiveCity};
    expect(clientReducer(initialState, setActiveCity(newActiveCity))).toEqual(expectedState);
  });

  it(`Reducer should set given active sorting`, () => {
    const newActiveSorting = `some-sorting`;
    const expectedState = {...initialState, activeSorting: newActiveSorting};
    expect(clientReducer(initialState, setActiveSorting(newActiveSorting))).toEqual(expectedState);
  });

  it(`Reducer should set given active offer id`, () => {
    const newActiveOfferId = 43;
    const expectedState = {...initialState, activeOfferId: newActiveOfferId};
    expect(clientReducer(initialState, setActiveOffer(newActiveOfferId))).toEqual(expectedState);
  });
});
