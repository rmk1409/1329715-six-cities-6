import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/api-action";
import {NameSpace} from "../../store/reducers/reducer";
import browserHistory from "../../browser-history";
import {MemoHeader} from "../header/header";

const Login = () => {
  const isUserAuthorized = useSelector((state) => state[NameSpace.SERVER].isUserAuthorized);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUserAuthorized) {
      browserHistory.push(`/`);
    }
  }, [isUserAuthorized]);

  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(login({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  return <div className="page page--gray page--login">
    <MemoHeader/>

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

export {Login};
