export interface Instance {
  [key: string]: InstanceValue;
}

export interface InstanceValue {
  isEnabled: boolean;
}

export interface Configuration {
  game?: ConfigurationGame;
  packs?: ConfigurationPack[];
}

export interface ConfigurationGame {
  description: string;
  image: string;
  name: string;
  timestamp: number;
  url: string;
  version: string;
}

export interface ConfigurationPack {
  addons: ConfigurationPackAddon[];
  description: string;
  image: string;
  name: string;
  timestamp: number;
  url: string;
  version: string;
}

export interface ConfigurationPackAddon {
  description: string;
  image: string;
  name: string;
  timestamp: number;
  url: string;
  version: string;
}
