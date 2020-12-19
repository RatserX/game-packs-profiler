import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

type ElementProps = {
  children?: JSX.Element;
};

type RouterProps = {
  children?: JSX.Element;
};

const Element = ({ children }: ElementProps): JSX.Element => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

const Router = ({ children }: RouterProps): JSX.Element => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" />
        </Switch>
      </BrowserRouter>
      {children}
    </div>
  );
};
export default { Element, Router };
