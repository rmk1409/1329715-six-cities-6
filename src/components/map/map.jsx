import React, {useEffect, memo} from "react";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {cities} from "../../const";
import {NameSpace} from "../../store/reducers/reducer";
import {offer as offerPropType} from "../../prop-types";

const Map = ({offers, city, isHighlightActiveOffer}) => {
  const activeOfferId = useSelector((state) => state[NameSpace.CLIENT].activeOfferId);
  const currentOpenOfferData = useSelector((state) => state[NameSpace.SERVER].currentOpenOfferData);
  const effectDependencies = [city, offers];
  if (isHighlightActiveOffer) {
    effectDependencies.push(activeOfferId);
  }

  useEffect(() => {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });
    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30],
    });

    const zoom = 12;
    const centralCity = cities.find((curCity) => curCity.name === city);
    const map = leaflet.map(`map`, {
      center: centralCity.coords,
      zoom,
      zoomControl: false,
      marker: true,
    });

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
    }).addTo(map);

    offers.forEach((offer) => {
      const iconOption = (isHighlightActiveOffer && activeOfferId === offer.id) ? activeIcon : icon;
      leaflet.marker([offer.location.latitude, offer.location.longitude], {icon: iconOption})
        .addTo(map)
        .bindPopup(offer.title);
    });

    if (!isHighlightActiveOffer) {
      leaflet.marker([currentOpenOfferData.location.latitude, currentOpenOfferData.location.longitude], {icon: activeIcon})
        .addTo(map)
        .bindPopup(currentOpenOfferData.title);
    }

    return () => map.remove();
  }, effectDependencies);

  return <div id="map" style={{height: `100%`}} data-testid="map"/>;
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  city: PropTypes.string.isRequired,
  isHighlightActiveOffer: PropTypes.bool.isRequired,
};

const MemoMap = memo(Map);

export {MemoMap, Map};
