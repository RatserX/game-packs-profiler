import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/About/About.component";
import Home from "./components/Home/Home.component";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
