import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route
          path="/"
          render={() =>
            !localStorage.getItem("token") ? <Redirect to="/login" /> : <Home />
          }
        />
      </Switch>
    </HashRouter>
  );
}
export default Routes;
