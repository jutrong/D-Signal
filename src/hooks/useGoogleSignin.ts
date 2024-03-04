import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useCallback } from 'react';
import { auth } from '../firebaseApp';

const useGoogleSignin = () => {
  const signin = useCallback(async () => {
    const provider = new GoogleAuthProvider();

    try {
      const { user } = await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const signout = useCallback(() => {
    signOut(auth);
  }, []);

  return { signin, signOut };
};

export default useGoogleSignin;
