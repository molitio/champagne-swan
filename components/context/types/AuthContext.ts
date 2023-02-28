import { Auth } from "firebase/auth";

export type AuthContext = {
  authContext: {
    signIn?: () => void;
  };
};
