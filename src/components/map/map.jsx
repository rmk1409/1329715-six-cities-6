import React, {useEffect} from "react";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {City} from "../../const";

const Map = ({offers, activeOfferId, city}) => {

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
      leaflet.marker([offer.location.latitude, offer.location.longitude], {icon: activeOfferId === offer.id ? activeIcon : icon})
        .addTo(map)
        .bindPopup(offer.title);
    });

    return () => map.remove();
  }, [activeOfferId, city]);

  return <div id="map" style={{height: `100%`}}/>;
};

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  activeOfferId: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeOfferId: state.activeOfferId,
});

const ConnectedMap = connect(mapStateToProps)(Map);

export {ConnectedMap};
