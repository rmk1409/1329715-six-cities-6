import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {EmptyMain} from "../empty-main/empty-main";
import {ConnectedOfferList} from "../offer-list/offer-list";
import {City, OfferType, SortOption} from "../../const";
import {connect} from "react-redux";
import {ConnectedCityList} from "../city-list/city-list";
import {ConnectedSortOptions} from "../sort-option/sort-option";
import {ConnectedMap} from "../map/map";
import {fetchOffers} from "../../store/api-action";
import LoadingScreen from "../loading-screen/loading-screen";
import {ConnectedHeader} from "../header/header";
import {resetMainPage} from "../../store/action";

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

const Main = ({offers, activeCity, onOpenPage, activeSorting, isOffersLoaded, onLoadOffers}) => {
  useEffect(() => onOpenPage(), []);
  useEffect(() => {
    if (!isOffersLoaded) {
      onLoadOffers();
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
    <ConnectedHeader/>

    <main className="page__main page__main--index">
      <ConnectedCityList cities={City}/>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{relevantOffers.length} places to stay in Amsterdam</b>
            <ConnectedSortOptions/>
            <ConnectedOfferList offers={relevantSortOffers} type={OfferType.MAIN}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <ConnectedMap city={activeCity} offers={relevantOffers} isHighlightActiveOffer={true}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>;
};

Main.propTypes = {
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
  activeSorting: PropTypes.string.isRequired,
  isOffersLoaded: PropTypes.bool.isRequired,
  onOpenPage: PropTypes.func.isRequired,
  onLoadOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  activeSorting: state.activeSorting,
  offers: state.offers,
  isOffersLoaded: state.isOffersLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onOpenPage() {
    dispatch(resetMainPage());
  },
  onLoadOffers() {
    dispatch(fetchOffers());
  },
});

const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(Main);

export {ConnectedMain};
