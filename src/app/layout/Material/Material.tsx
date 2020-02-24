import React, { FunctionComponent } from "react";

const Material: FunctionComponent = ({ children }) => {
  return (
    <div className="material-container">
      <div>{children}</div>
    </div>
  );
};

export default Material;
