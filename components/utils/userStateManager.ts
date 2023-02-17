import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeFirebase } from "./firebase";

const { firebaseApp, analytics } = initializeFirebase();

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

const signIn = async () => {
  const result = await signInWithPopup(auth, provider);
};

const signOut = async () => {
  auth.signOut();
};

export { signIn, signOut, auth };
