import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/api-action";
import {NameSpace} from "../../store/reducers/reducer";
import browserHistory from "../../browser-history";
import MemoHeader from "../header/header";
import {Routing} from "../../const";

const Login = () => {
  const isUserAuthorized = useSelector((state) => state[NameSpace.SERVER].isUserAuthorized);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUserAuthorized) {
      browserHistory.push(Routing.ROOT);
    }
  }, [isUserAuthorized]);

  const loginRef = useRef();
  const passwordRef = useRef();
  const refErrorMsg = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(login({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }, (err) => {
      if (refErrorMsg.current) {
        refErrorMsg.current.textContent = `Error happened while login: ${err}`;
      }
    }));
  };

  return <div className="page page--gray page--login">
    <MemoHeader/>

    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <p style={{color: `red`, width: `350px`}} ref={refErrorMsg}/>
          <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden" htmlFor="email-input">E-mail</label>
              <input
                ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email"
                required="" id="email-input"/>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden" htmlFor="password-input">Password</label>
              <input
                ref={passwordRef} className="login__input form__input" type="password" name="password"
                placeholder="Password" required="" id="password-input"/>
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
