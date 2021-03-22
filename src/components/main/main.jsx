import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {EmptyMain} from "../empty-main/empty-main";
import {OfferList} from "../offer-list/offer-list";
import {Amsterdam, cities, OfferType, SortOption} from "../../const";
import {Map} from "../map/map";
import {connect} from "react-redux";
import {ConnectedCityList} from "../city-list/city-list";
import {ActionCreator} from "../../store/action";
import {Header} from "../header/header";
import {ConnectedSortOptions} from "../sort-option/sort-option";

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

const Main = ({offers, activeCity, onOpenPage, activeSorting}) => {
  useEffect(() => onOpenPage(), []);

  const relevantOffers = getOffersForCity(offers, activeCity);

  if (!relevantOffers.length) {
    return <EmptyMain/>;
  }

  const relevantSortOffers = getSortedOffers(relevantOffers, activeSorting);

  return <div className="page page--gray page--main">
    <Header/>

    <main className="page__main page__main--index">
      <ConnectedCityList cities={cities}/>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{relevantOffers.length} places to stay in Amsterdam</b>
            <ConnectedSortOptions/>
            <OfferList offers={relevantSortOffers} type={OfferType.MAIN}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city={Amsterdam} offers={relevantOffers}/>
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
  onOpenPage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  activeSorting: state.activeSorting,
});

const mapDispatchToProps = (dispatch) => ({
  onOpenPage() {
    dispatch(ActionCreator.resetMainPage());
  },
});

const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(Main);

export {ConnectedMain};
