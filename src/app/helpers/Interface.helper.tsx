export interface Instance {
  [key: string]: InstanceValue;
}

export interface InstanceValue {
  isEnabled: boolean;
}

export interface Configuration {
  game?: ConfigurationGame;
  packs?: ConfigurationPack[];
  servers?: ConfigurationServer[];
}

export interface ConfigurationGame {
  description: string;
  download: string;
  image: string;
  name: string;
  timestamp: number;
  url: string;
  version: string;
}

export interface ConfigurationPack {
  description: string;
  download: string;
  image: string;
  name: string;
  timestamp: number;
  url: string;
  version: string;
  addons: ConfigurationPackAddon[];
  instructions: string[];
}

export interface ConfigurationPackAddon {
  description: string;
  download: string;
  image: string;
  name: string;
  timestamp: number;
  url: string;
  version: string;
}

export interface ConfigurationServer {
  address: string;
  description: string;
  image: string;
  name: string;
  port: number;
}
