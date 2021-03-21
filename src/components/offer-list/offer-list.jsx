import React, {useState} from "react";
import PropTypes from "prop-types";
import {OfferCard} from "../offer-card/offer-card";

const OfferList = ({offers}) => {
  const [, setActiveOffer] = useState();

  const handleEvent = (evt) => {
    switch (evt.type) {
      case `mouseenter`:
        setActiveOffer(evt.target.closest(`.place-card`).dataset.id);
        break;
      case `mouseleave`:
        setActiveOffer(null);
        break;
    }
  };

  return <>
    {offers.map((value) => <OfferCard key={value.id} offer={value} handleEvent={handleEvent}/>)}
  </>;
};

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export {OfferList};
