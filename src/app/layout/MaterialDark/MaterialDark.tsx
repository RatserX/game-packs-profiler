import React, { FunctionComponent } from "react";
import Material from "../Material/Material";

const MaterialDark: FunctionComponent = ({ children }) => {
  return (
    <div>
      <Material>
        <div>{children}</div>
      </Material>
    </div>
  );
};

export default MaterialDark;
