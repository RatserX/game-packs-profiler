import React, { FunctionComponent } from "react";

const Material: FunctionComponent = ({ children }) => {
  return (
    <div className="container">
      <div>{children}</div>
    </div>
  );
};

export default Material;
