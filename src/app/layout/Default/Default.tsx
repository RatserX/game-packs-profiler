import React, { FunctionComponent } from "react";

// tratar de llamar el import DENTRO de un link rel porque ese import hace que se llame desde todo el codigo

const Default: FunctionComponent = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default Default;
