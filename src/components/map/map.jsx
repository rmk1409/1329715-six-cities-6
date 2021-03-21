import React, {useEffect} from "react";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import PropTypes from "prop-types";

const Map = ({city, offers}) => {
  useEffect(() => {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(map);

    offers.forEach((offer) => {
      leaflet.marker([offer.location.latitude, offer.location.longitude], {icon})
        .addTo(map)
        .bindPopup(offer.title);
    });
  }, []);

  return <div id="map" style={{height: `100%`}}/>;
};

Map.propTypes = {
  city: PropTypes.array.isRequired,
  offers: PropTypes.array.isRequired
};

export {Map};
