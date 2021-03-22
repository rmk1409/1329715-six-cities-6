import React from "react";
import PropTypes from "prop-types";
import {OfferCard} from "../offer-card/offer-card";
import {OfferType} from "../../const";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";

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

const OfferList = ({offers, type, setActiveOffer}) => {
  const handleEvent = (evt) => {
    switch (evt.type) {
      case `mouseenter`:
        setActiveOffer(+evt.target.closest(`.place-card`).dataset.id);
        break;
      case `mouseleave`:
        setActiveOffer(-1);
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
  setActiveOffer: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  setActiveOffer(activeOfferId) {
    dispatch(ActionCreator.setActiveOffer(activeOfferId));
  },
});

const ConnectedOfferList = connect(null, mapDispatchToProps)(OfferList);

export {ConnectedOfferList};
