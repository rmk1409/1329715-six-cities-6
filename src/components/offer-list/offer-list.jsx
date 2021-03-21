import React, {useState} from "react";
import PropTypes from "prop-types";
import {OfferCard} from "../offer-card/offer-card";
import {OfferType} from "../../const";

const getClassForOfferListByType = (type) => {
  let offerListClass = ``;
  switch (type) {
    case OfferType.MAIN:
      offerListClass = `cities__places-list places__list tabs__content`;
      break;
    case OfferType.NEAR:
      offerListClass = `near-places__list places__list`;
      break;
    case OfferType.FAVORITE:
      offerListClass = `favorites__places`;
      break;
  }
  return offerListClass;
};

const OfferList = ({offers, type}) => {
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

  return <div className={getClassForOfferListByType(type)}>
    {offers.map((value) => <OfferCard key={value.id} type={type} offer={value} handleEvent={handleEvent}/>)}
  </div>;
};

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};

export {OfferList};
