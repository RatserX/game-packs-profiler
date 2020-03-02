import React from "react";
import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";
import Material from "../Material/Material";

type ElementProps = {
  children?: JSX.Element;
};

type RouterProps = {
  children?: JSX.Element;
};

const Element = ({ children }: ElementProps) => {
  const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Material.Element>{children}</Material.Element>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
};

const Router = ({ children }: RouterProps) => {
  return (
    <div>
      <Material.Router>{children}</Material.Router>
    </div>
  );
};

export default { Element, Router };
