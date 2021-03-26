import React, {useEffect} from 'react';
import {EmptyMain} from "../empty-main/empty-main";
import {City, OfferType, SortOption} from "../../const";
import {useDispatch, useSelector} from "react-redux";
import {fetchOffers} from "../../store/api-action";
import LoadingScreen from "../loading-screen/loading-screen";
import {resetMainPage} from "../../store/action";
import {NameSpace} from "../../store/reducers/reducer";
import {CityList} from "../city-list/city-list";
import {Header} from "../header/header";
import {Map} from "../map/map";
import {OfferList} from "../offer-list/offer-list";
import {SortOptions} from "../sort-options/sort-options";

const getOffersForCity = (offers, city) => {
  return offers.filter((offer) => city === offer.city.name);
};

const getSortedOffers = (offers, activeSorting) => {
  let sortedOffers = [...offers];
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
};

const Main = () => {
  const {activeCity, activeSorting} = useSelector((state) => state[NameSpace.CLIENT]);
  const {offers, isOffersLoaded} = useSelector((state) => state[NameSpace.SERVER]);
  const dispatch = useDispatch();
  useEffect(() => dispatch(resetMainPage()), []);
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

  const relevantOffers = getOffersForCity(offers, activeCity);

  if (!relevantOffers.length) {
    return <EmptyMain/>;
  }

  const relevantSortOffers = getSortedOffers(relevantOffers, activeSorting);

  return <div className="page page--gray page--main">
    <Header/>

    <main className="page__main page__main--index">
      <CityList cities={City}/>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{relevantOffers.length} places to stay in Amsterdam</b>
            <SortOptions/>
            <OfferList offers={relevantSortOffers} type={OfferType.MAIN}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city={activeCity} offers={relevantOffers} isHighlightActiveOffer={true}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>;
};

export {Main};
