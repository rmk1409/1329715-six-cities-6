import React, {useEffect} from "react";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {City} from "../../const";
import {NameSpace} from "../../store/reducers/reducer";

const Map = ({offers, activeOfferId, city, isHighlightActiveOffer}) => {
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
    const map = leaflet.map(`map`, {
      center: City[city.toUpperCase()].coords,
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

    return () => map.remove();
  }, effectDependencies);

  return <div id="map" style={{height: `100%`}}/>;
};

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  activeOfferId: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  isHighlightActiveOffer: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  activeOfferId: state[NameSpace.CLIENT].activeOfferId,
});

const ConnectedMap = connect(mapStateToProps)(Map);

export {ConnectedMap};
