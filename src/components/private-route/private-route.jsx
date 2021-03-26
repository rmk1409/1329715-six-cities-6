import {Redirect, Route} from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {NameSpace} from "../../store/reducers/reducer";

const PrivateRoute = ({render, path, exact}) => {
  const {isUserAuthorized} = useSelector((state)=>state[NameSpace.SERVER]);
  return (
    <Route path={path} exact={exact} render={(routeProps) => {
      return (isUserAuthorized ? render(routeProps) : <Redirect to={`/login`}/>);
    }}/>
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export {PrivateRoute};
