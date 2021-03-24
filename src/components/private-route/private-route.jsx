import {Route, Redirect} from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const PrivateRoute = ({render, path, exact, isUserAuthorized}) => {
  return (
    <Route path={path} exact={exact} render={(routeProps) => {
      return (isUserAuthorized ? render(routeProps) : <Redirect to={`/login`}/>);
    }}/>
  );
};

PrivateRoute.propTypes = {
  isUserAuthorized: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isUserAuthorized: state.isUserAuthorized,
});

const ConnectedPrivateRoute = connect(mapStateToProps)(PrivateRoute);
export {ConnectedPrivateRoute};
