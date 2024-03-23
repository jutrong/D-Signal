import { useReview } from "@_hooks/Review/useReview";
import { IReview } from "@_types/review";

interface IReviewDisplayProps {
  review: IReview;
  postId: string;
}

const ReviewDisplay = ({ review, postId }: IReviewDisplayProps) => {
  const { deleteReview } = useReview({ postId })

  const onClickDelete = () => {
    deleteReview(postId, review.id)
  }
  return (
    <div>
      <h2>Review Display</h2>
      <p>{review.content}</p>
      <p>{review.rating}</p>
      <p>{review.tissue ? '휴지 있음' : '휴지 없음'}</p>
      <button onClick={onClickDelete}> 리뷰 삭제</button>
    </div>
  );
}

export default ReviewDisplay;