import React from "react";
import PropTypes from "prop-types";
import {OfferCard} from "../offer-card/offer-card";
import {OfferType} from "../../const";
import {useDispatch} from "react-redux";
import {setActiveOffer as setActiveOfferAction} from "../../store/action";

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
  const dispatch = useDispatch();
  const handleEvent = (evt) => {
    switch (evt.type) {
      case `mouseenter`:
        dispatch(setActiveOfferAction(+evt.target.closest(`.place-card`).dataset.id));
        break;
      case `mouseleave`:
        dispatch(setActiveOfferAction(-1));
        break;
    }
  };

  return <div className={getClassForOfferListByType(type)}>
    {offers.map((value) => <OfferCard key={value.id} type={type} offer={value} onHandleEvent={handleEvent}/>)}
  </div>;
};

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};

export {OfferList};
