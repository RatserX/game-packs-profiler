import React from "react";
import Default from "./Default/Default";
import MaterialDark from "./MaterialDark/MaterialDark";
import MaterialLight from "./MaterialLight/MaterialLight";

enum ThemeType {
  Default,
  MaterialDark,
  MaterialLight
}

type LayoutProps = {
  children?: JSX.Element;
  themeType?: ThemeType;
};

const Layout = ({ themeType, children }: LayoutProps) => {
  switch (themeType) {
    case ThemeType.MaterialDark:
      require("./MaterialDark/_styles.scss");

      return (
        <MaterialDark.Element>
          <MaterialDark.Router>{children}</MaterialDark.Router>
        </MaterialDark.Element>
      );
    case ThemeType.MaterialLight:
      require("./MaterialLight/_styles.scss");

      return (
        <MaterialLight.Element>
          <MaterialLight.Router>{children}</MaterialLight.Router>
        </MaterialLight.Element>
      );
    default:
      require("./Default/_styles.scss");

      return (
        <Default.Element>
          <Default.Router>{children}</Default.Router>
        </Default.Element>
      );
  }
};

/* Layout.defaultProps = {
  layoutType: LayoutType.Default,
  children: ""
};

Layout.propTypes = {
  layoutType: PropTypes.oneOf($enum(LayoutType).getValues()),
  children: PropTypes.node
}; */

export { ThemeType };
export default Layout;
