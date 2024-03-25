import {
  deleteReviewById,
  getReviewsByPostId,
  writeReview,
} from '@_remote/review';
import { useUserStore } from '@_store/user';
import { IReview, IReviewExtended } from '@_types/review';
import { useState } from 'react';

export const useReview = (postId?: string) => {
  const [reviews, setReviews] = useState<IReviewExtended[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useUserStore();

  const fetchReviews = async () => {
    if (!postId) return;
    setIsLoading(true);
    try {
      const reviewsData = await getReviewsByPostId(postId);
      setReviews(reviewsData);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteReview = async (reviewId: string) => {
    if (!postId) return;
    try {
      await deleteReviewById(postId, reviewId);
      fetchReviews();
    } catch (err) {
      setError(err as Error);
    }
  };

  const addReview = async (review: Omit<IReview, 'id'>) => {
    setIsLoading(true);
    if (!postId) return;
    try {
      await writeReview({
        ...review,
        userId: user?.uid || null,
        createdAt: new Date(),
        postId,
      });
      fetchReviews();
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    addReview,
    fetchReviews,
    deleteReview,
    reviews,
    isLoading,
    error,
  };
};
