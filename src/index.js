import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./components/app/app";
import {Provider} from "react-redux";
import {reducer} from "./store/reducers/reducer";
import {createAPI} from "./services/api";
import {checkAuth} from "./store/api-action";
import {setAuthorization} from "./store/action";
import {redirect} from "./store/middlewares/redirect";
import {configureStore} from "@reduxjs/toolkit";

const axios = createAPI(() => store.dispatch(setAuthorization(false)));

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axios
      },
    }).concat(redirect)
});

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`),
);
