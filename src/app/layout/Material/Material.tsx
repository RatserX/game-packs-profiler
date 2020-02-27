import React, { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Helmet from "react-helmet";

const Material: FunctionComponent = ({ children }) => {
  return (
    <div className="material-container">
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Container>{children}</Container>
    </div>
  );
};

export default Material;
