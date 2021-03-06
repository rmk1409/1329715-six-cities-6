import React, {memo} from 'react';
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {setActiveCity} from "../../store/action";
import {NameSpace} from "../../store/reducers/reducer";

const CityList = ({cities}) => {
  const activeCity = useSelector((state) => state[NameSpace.CLIENT].activeCity);
  const dispatch = useDispatch();
  const handleCityClick = (evt) => {
    evt.preventDefault();
    const newActiveCity = evt.currentTarget.dataset.name;
    dispatch(setActiveCity(newActiveCity));
  };

  return <>
    <h1 className="visually-hidden">Cities</h1>
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) =>
            <li key={city.name} className="locations__item">
              <a
                className={`locations__item-link tabs__item ${activeCity === city.name ? `tabs__item--active` : ``}`}
                onClick={handleCityClick} data-name={city.name}>
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
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.number).isRequired,
  })).isRequired,
};

const MemoCityList = memo(CityList);

export {MemoCityList, CityList};
export default MemoCityList;
