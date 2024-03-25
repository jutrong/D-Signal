import { db } from '@_remote/firebaseApp';
import COLLECTIONS from '@_constants';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import { User } from '@_types/user';
import { IReview, IReviewExtended } from '@_types/review';

export const getReviewsByPostId = async (postId: string) => {
  const postRef = doc(db, COLLECTIONS.toilet, postId);
  const reviewRef = collection(postRef, COLLECTIONS.REVIEW);
  const snapshot = await getDocs(reviewRef);

  const reviewsData: IReviewExtended[] = await Promise.all(
    snapshot.docs.map(async (snapshotDoc) => {
      const review = snapshotDoc.data() as IReview;
      review.id = snapshotDoc.id;

      let userData: User | undefined = undefined;
      if (review.userId) {
        const userRef = doc(db, COLLECTIONS.USER, review.userId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          userData = userSnap.data() as User;
        }
      }
      return { ...review, user: userData };
    }),
  );

  return reviewsData;
};

export const deleteReviewById = async (postId: string, reviewId: string) => {
  const postRef = doc(db, COLLECTIONS.toilet, postId);
  const reviewRef = doc(collection(postRef, COLLECTIONS.REVIEW), reviewId);

  await deleteDoc(reviewRef);
};

export const writeReview = async (review: Omit<IReview, 'id'>) => {
  const postRef = doc(db, COLLECTIONS.toilet, review.postId);
  const reviewRef = doc(collection(postRef, COLLECTIONS.REVIEW));

  await setDoc(reviewRef, review);
};
