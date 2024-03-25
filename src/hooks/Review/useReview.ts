import {
  deleteReviewById,
  getReviewsByPostId,
  writeReview,
} from '@_remote/review';
import { useUserStore } from '@_store/user';
import { IReview, IReviewExtended } from '@_types/review';
import { useState } from 'react';
import { toast } from 'react-toastify';

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
      toast.success('리뷰를 삭제하였습니다..');
      fetchReviews();
    } catch (err) {
      setError(err as Error);
      toast.error(
        '알 수 없는 오류가 발생하였습니다. 잠시 후 다시 시도해주세요.',
      );
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
      toast.success('리뷰를 작성하였습니다..');
      fetchReviews();
    } catch (err) {
      setError(err as Error);
      toast.error(
        '알 수 없는 오류가 발생하였습니다. 잠시 후 다시 시도해주세요.',
      );
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
