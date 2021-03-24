import React, {useRef} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ConnectedHeader} from "../header/header";
import {login} from "../../store/api-action";
import {Redirect} from "react-router-dom";

const Login = ({isUserAuthorized, onSubmit}) => {
  if (isUserAuthorized) {
    return <Redirect to="/"/>;
  }

  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return <div className="page page--gray page--login">
    <ConnectedHeader/>

    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email"
                required=""/>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                ref={passwordRef} className="login__input form__input" type="password" name="password"
                placeholder="Password" required=""/>
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  </div>;
};

Login.propTypes = {
  isUserAuthorized: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isUserAuthorized: state.isUserAuthorized,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
export {ConnectedLogin};
