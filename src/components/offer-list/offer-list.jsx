import React, {useState} from "react";
import PropTypes from "prop-types";
import {OfferCard} from "../offer-card/offer-card";

const OfferList = ({offers}) => {
  const [, setActiveOffer] = useState();

  const handleMouseEnter = (evt) => {
    setActiveOffer(evt.target.closest(`.place-card`).dataset.id);
  };

  const handleMouseLeave = () => {
    setActiveOffer(null);
  };

  return <>
    {offers.map((value) => <OfferCard key={value.id} offer={value} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>)}
  </>;
};

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export {OfferList};
