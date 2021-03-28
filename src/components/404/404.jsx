import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => (
  <div style={{margin: `100px auto 0`, width: `500px`}}>
    <h1>404. Page not found</h1>
    <Link to="/" style={{color: `blue`, textDecorationLine: `underline`}}>Вернуться на главную</Link>
  </div>
);

export {NotFound};
