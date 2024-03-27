import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseApp';
import { Toilet } from '@_types/toilet';

export const getPostDetail = async (postId: string) => {
  if (postId) {
    const docRef = doc(db, 'toilet', postId);
    const docSnap = await getDoc(docRef);

    const post = { id: docSnap.id, ...(docSnap.data() as Toilet) };

    return post;
  }
};
