export type AuthContext = {
  authContext: {
    signIn?: () => Promise<void>;
    signOut?: () => Promise<void>;
  };
};
