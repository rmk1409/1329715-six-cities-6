import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const CityList = ({cities, activeCity, onCityClick}) => {
  const handleCityClick = (evt) => {
    evt.preventDefault();
    const newActiveCity = evt.target.tagName === `A` ? evt.target.querySelector(`span`).textContent : evt.target.textContent;
    onCityClick(newActiveCity);
  };

  return <>
    <h1 className="visually-hidden">Cities</h1>
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) =>
            <li key={city} className="locations__item">
              <a
                className={`locations__item-link tabs__item ${activeCity === city ? `tabs__item--active` : ``}`}
                onClick={handleCityClick}>
                <span>{city}</span>
              </a>
            </li>,
          )}
        </ul>
      </section>
    </div>
  </>;
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(newActiveCity) {
    dispatch(ActionCreator.setActiveCity(newActiveCity));
  },
});

const ConnectedCityList = connect(mapStateToProps, mapDispatchToProps)(CityList);

export {ConnectedCityList};
