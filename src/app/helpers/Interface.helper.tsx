export interface Expand {
  array: ExpandArray;
}

export interface ExpandArray {
  [key: string]: ExpandArrayValue;
}

export interface ExpandArrayValue {
  isEnabled: boolean;
}

export interface Profile {
  game?: ProfileGame;
  packs?: ProfilePack[];
}

export interface ProfileGame {
  description: string;
  name: string;
  timestamp: number;
  url: string;
  version: string;
}

export interface ProfilePack {
  addons: ProfilePackAddon[];
  description: string;
  name: string;
  timestamp: number;
  url: string;
  version: string;
}

export interface ProfilePackAddon {
  description: string;
  name: string;
  timestamp: number;
  url: string;
  version: string;
}
