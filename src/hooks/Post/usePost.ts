import { getPostDetail } from '@_remote/post';
import { useQuery } from '@tanstack/react-query';

const usePost = (postId: string) => {
  const {
    isLoading,
    error,
    data: post,
  } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPostDetail(postId),
  });

  return { isLoading, error, post };
};

export default usePost;
