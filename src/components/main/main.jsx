import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {EmptyMain} from "../empty-main/empty-main";
import {OfferList} from "../offer-list/offer-list";
import {Amsterdam, cities, OfferType} from "../../const";
import {Map} from "../map/map";
import {connect} from "react-redux";
import {ConnectedCityList} from "../city-list/city-list";
import {ActionCreator} from "../../store/action";
import {Header} from "../header/header";

const getOffersForCity = (offers, city) => {
  return offers.filter((offer) => city === offer.city.name);
};

const Main = ({offers, activeCity, onOpenPage}) => {
  useEffect(() => onOpenPage(), []);

  const relevantOffers = getOffersForCity(offers, activeCity);

  if (!relevantOffers.length) {
    return <EmptyMain/>;
  }

  return <div className="page page--gray page--main">
    <Header/>

    <main className="page__main page__main--index">
      <ConnectedCityList cities={cities}/>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{relevantOffers.length} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                  &nbsp;Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"/>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            <OfferList offers={relevantOffers} type={OfferType.MAIN}/>
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
  onOpenPage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onOpenPage() {
    dispatch(ActionCreator.resetActiveCity());
  },
});

const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(Main);

export {ConnectedMain};
