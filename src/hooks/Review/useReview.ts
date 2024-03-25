import {
  deleteReviewById,
  getReviewsByPostId,
  writeReview,
} from '@_remote/review';
import { useUserStore } from '@_store/user';
import { IReview } from '@_types/review';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const useReview = (postId?: string) => {
  const queryClient = useQueryClient();
  const { user } = useUserStore();
  const isEnabled = postId !== undefined;

  const {
    isLoading,
    error,
    data: reviews,
  } = useQuery({
    queryKey: ['reviews', postId],
    queryFn: () => (postId ? getReviewsByPostId(postId) : Promise.resolve([])),
    enabled: isEnabled,
  });

  const deleteReviewMutation = useMutation({
    mutationKey: ['deleteReview'],
    mutationFn: (reviewId: string) =>
      postId ? deleteReviewById(postId, reviewId) : Promise.resolve(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['reviews', postId],
      });
      toast.success('리뷰가 삭제되었습니다.');
    },
    onError: (err: Error) => {
      toast.error('리뷰 삭제에 실패했습니다.');
    },
  });

  const addReviewMutation = useMutation({
    mutationKey: ['addReview'],
    mutationFn: (review: Omit<IReview, 'id'>) =>
      postId
        ? writeReview({
            ...review,
            postId,
            userId: user?.uid || null,
          })
        : Promise.resolve(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['reviews', postId],
      });
      toast.success('리뷰를 작성하였습니다.');
    },
    onError: (err: Error) => {
      toast.error('리뷰 작성에 실패했습니다.');
    },
  });

  return {
    reviews,
    isLoading,
    error,
    deleteReview: deleteReviewMutation.mutate,
    addReview: addReviewMutation.mutate,
  };
};
