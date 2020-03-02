import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "@material-ui/core";
import Helmet from "react-helmet";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../../components/Material/Home/Home.component";

type ElementProps = {
  children?: JSX.Element;
};

type RouterProps = {
  children?: JSX.Element;
};

const Element = ({ children }: ElementProps) => {
  return (
    <div>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
      <Container>{children}</Container>
    </div>
  );
};

const Router = ({ children }: RouterProps) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
      {children}
    </div>
  );
};

export default { Element, Router };
