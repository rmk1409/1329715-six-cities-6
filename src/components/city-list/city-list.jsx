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
          {Object.values(cities).map((city) =>
            <li key={city.name} className="locations__item">
              <a
                className={`locations__item-link tabs__item ${activeCity === city.name ? `tabs__item--active` : ``}`}
                onClick={handleCityClick}>
                <span>{city.name}</span>
              </a>
            </li>,
          )}
        </ul>
      </section>
    </div>
  </>;
};

CityList.propTypes = {
  cities: PropTypes.object.isRequired,
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
