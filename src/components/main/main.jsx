import React, {useEffect} from 'react';
import {EmptyMain} from "../empty-main/empty-main";
import {cities, OfferType, SortOption} from "../../const";
import {useDispatch, useSelector} from "react-redux";
import {fetchOffers} from "../../store/api-action";
import LoadingScreen from "../loading-screen/loading-screen";
import {resetMainPage} from "../../store/action";
import {NameSpace} from "../../store/reducers/reducer";
import MemoCityList from "../city-list/city-list";
import {MemoHeader} from "../header/header";
import MemoMap from "../map/map";
import {OfferList} from "../offer-list/offer-list";
import {MemoSortOptions} from "../sort-options/sort-options";
import {createSelector} from 'reselect';

const getOffers = (state) => state[NameSpace.SERVER].offers;
const getActiveCity = (state) => state[NameSpace.CLIENT].activeCity;
const getActiveSorting = (state) => state[NameSpace.CLIENT].activeSorting;

const offerCitySelector = createSelector(getOffers, getActiveCity, (offers, city) => {
  return offers.filter((offer) => city === offer.city.name);
});

const offerSortingSelector = createSelector(offerCitySelector, getActiveSorting, (offers, activeSorting) => {
  const sortedOffers = [...offers];
  switch (activeSorting) {
    case SortOption.TOP_RATED_FIRST:
      sortedOffers.sort((a, b) => b.rating - a.rating);
      break;
    case SortOption.LOW_PRICE_FIRST:
      sortedOffers.sort((a, b) => a.price - b.price);
      break;
    case SortOption.HIGH_PRICE_FIRST:
      sortedOffers.sort((a, b) => b.price - a.price);
      break;
  }
  return sortedOffers;
});

const Main = () => {
  const activeCity = useSelector((state) => state[NameSpace.CLIENT].activeCity);
  const isOffersLoaded = useSelector((state) => state[NameSpace.SERVER].isOffersLoaded);
  const dispatch = useDispatch();
  const relevantSortOffers = useSelector(offerSortingSelector);
  useEffect(() => {
    dispatch(resetMainPage());
  }, []);
  useEffect(() => {
    if (!isOffersLoaded) {
      dispatch(fetchOffers());
    }
  }, [isOffersLoaded]);
  if (!isOffersLoaded) {
    return (
      <LoadingScreen/>
    );
  }
  if (!relevantSortOffers.length) {
    return <EmptyMain/>;
  }

  return <div className="page page--gray page--main">
    <MemoHeader/>

    <main className="page__main page__main--index">
      <MemoCityList cities={cities}/>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{relevantSortOffers.length} places to stay in {activeCity}</b>
            <MemoSortOptions/>
            <OfferList offers={relevantSortOffers} type={OfferType.MAIN}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <MemoMap city={activeCity} offers={relevantSortOffers} isHighlightActiveOffer/>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>;
};

export {Main};
