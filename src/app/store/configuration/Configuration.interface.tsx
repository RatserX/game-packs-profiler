export interface Profile {
  game?: ProfileGame;
  packs?: ProfilePack[];
  servers?: ProfileServer[];
}

export interface ProfileGame {
  description: string;
  download: string;
  image: string;
  name: string;
  timestamp: number;
  url: string;
  version: string;
}

export interface ProfilePack {
  description: string;
  download: string;
  image: string;
  name: string;
  timestamp: number;
  url: string;
  version: string;
  addons: ProfilePackAddon[];
  instructions: string[];
}

export interface ProfilePackAddon {
  description: string;
  download: string;
  image: string;
  name: string;
  required?: boolean;
  timestamp: number;
  url: string;
  version: string;
}

export interface ProfileServer {
  address: string;
  description: string;
  image: string;
  name: string;
  port: number;
}
