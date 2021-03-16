import React from "react";
import {Main} from "../main/main";
import PropTypes from "prop-types";

const App = ({offerQuantity}) => (
  <Main offerQuantity={offerQuantity}/>
);

App.propTypes = {
  offerQuantity: PropTypes.number.isRequired
};

export {App};
