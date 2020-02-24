export interface Profile {
  game?: ProfileGame;
  packs?: ProfilePack[];
}

interface ProfileGame {
  name: string;
  timestamp: number;
  url: string;
  version: string;
}

interface ProfilePack {
  addons: ProfilePackAddon[];
  category: string;
  version: string;
}

interface ProfilePackAddon {
  name: string;
  timestamp: number;
  url: string;
  version: string;
}
