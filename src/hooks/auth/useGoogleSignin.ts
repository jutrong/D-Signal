import { COLLECTIONS } from '@_constants';
import { auth, db } from '@_remote/firebaseApp';
import { useModalStore } from '@_store/modal';
import { FirebaseError } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useGoogleSignin = () => {
  const navigate = useNavigate();
  const { closeModal } = useModalStore();

  const signin = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    try {
      const { user } = await signInWithPopup(auth, provider);

      const userSnapshot = await getDoc(
        doc(collection(db, COLLECTIONS.USER), user.uid),
      );
      // 이미 가입한 유저
      if (userSnapshot.exists()) {
        navigate('/');
      } else {
        const newUser = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoUrl: user.photoURL,
        };

        await setDoc(doc(collection(db, COLLECTIONS.USER), user.uid), newUser);
        navigate('/');
      }
      closeModal();
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/popup-closed-by-user') {
          return;
        }

        throw new Error('fail to signin');
      }
    }
  }, [navigate]);

  const signout = useCallback(() => {
    signOut(auth);
  }, []);

  return { signin, signout };
};

export default useGoogleSignin;
