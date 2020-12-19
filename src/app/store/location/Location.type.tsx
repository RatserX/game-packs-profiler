export const SET_PUBLIC_URL = "LOCATION_1";

interface SetPublicUrlAction {
  type: typeof SET_PUBLIC_URL;
  publicUrl: string;
}

export type LocationAction = SetPublicUrlAction;

export interface LocationState {
  publicUrl: string;
}
