import COLLECTIONS from '@_constants';
import { db } from '@_remote/firebaseApp';
import { useUserStore } from '@_store/user';
import { IReview } from '@_types/review';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { useState } from 'react';

export const useReview = ({ postId }: { postId?: string }) => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useUserStore();

  const getReviews = async (postId: string) => {
    setIsLoading(true);
    try {
      const postRef = doc(db, COLLECTIONS.toilet, postId);
      const reviewRef = collection(postRef, COLLECTIONS.REVIEW);
      const snapshot = await getDocs(reviewRef);

      const reviewsData: IReview[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as IReview[];

      setReviews(reviewsData);
      setIsLoading(false);
      return reviewsData;
    } catch (err) {
      setError(err as Error);
      setIsLoading(false);
    }
  };

  const writeReview = async (review: Omit<IReview, 'id'>) => {
    setIsLoading(true);
    try {
      const postRef = doc(db, COLLECTIONS.toilet, review.postId);
      const reviewRef = doc(collection(postRef, COLLECTIONS.REVIEW));

      const newReview = {
        ...review,
        userId: user?.uid || null,
        createdAt: new Date(),
        postId,
      };

      await setDoc(reviewRef, newReview);
      setIsSuccess(true);
      alert('리뷰가 등록되었습니다.');
    } catch (err) {
      setError(err as Error);
      alert('리뷰가 등록이 실패했습니다.');
      console.log(error);
      console.log(err);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return { writeReview, getReviews, reviews, isSuccess, isLoading, error };
};
