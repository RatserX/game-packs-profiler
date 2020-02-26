import React, { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const Material: FunctionComponent = ({ children }) => {
  return (
    <div className="material-container">
      <Container>{children}</Container>
    </div>
  );
};

export default Material;
