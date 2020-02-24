import React, { FunctionComponent, ReactNode } from "react";
import Default from "./Default/Default";
import MaterialDark from "./MaterialDark/MaterialDark";
import MaterialLight from "./MaterialLight/MaterialLight";

enum LayoutType {
  Default,
  MaterialDark,
  MaterialLight
}

interface LayoutProps {
  children?: ReactNode;
  layoutType?: LayoutType;
}

const Layout: FunctionComponent<LayoutProps> = ({ layoutType, children }) => {
  switch (layoutType) {
    case LayoutType.MaterialDark:
      require("./MaterialDark/_styles.scss");
      return <MaterialDark>{children}</MaterialDark>;
    case LayoutType.MaterialLight:
      require("./MaterialLight/_styles.scss");
      return <MaterialLight>{children}</MaterialLight>;
    default:
      require("./Default/_styles.scss");
      return <Default>{children}</Default>;
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

export { LayoutType };
export default Layout;
