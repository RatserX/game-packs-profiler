export interface Profile {
  game?: ProfileGame;
  packs?: ProfilePack[];
}

export interface ProfileGame {
  name: string;
  timestamp: number;
  url: string;
  version: string;
}

export interface ProfilePack {
  addons: ProfilePackAddon[];
  category: string;
  version: string;
}

export interface ProfilePackAddon {
  name: string;
  timestamp: number;
  url: string;
  version: string;
}
