import { LocationAction, SET_PUBLIC_URL } from "./Location.type";

const setPublicUrl = (publicUrl: string): LocationAction => {
  return {
    type: SET_PUBLIC_URL,
    publicUrl,
  };
};

export { setPublicUrl };
