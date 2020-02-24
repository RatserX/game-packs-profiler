import React from "react";
import { ProfilePackAddon } from "../../helpers/Interface.helper";

type Props = {
  addon: ProfilePackAddon;
  key: string;
};

const HomePackAddon = (props: Props) => {
  const { addon } = props;

  return (
    <a href={addon.url}>
      <ul>
        <li>{addon.name}</li>
        <li>v{addon.version}</li>
      </ul>
    </a>
  );
};

export default HomePackAddon;
