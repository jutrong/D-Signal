import { IReview } from "@_types/review";

interface IReviewDisplayProps {
  review: IReview;
}

const ReviewDisplay = ({ review }: IReviewDisplayProps) => {
  return (
    <div>
      <h2>Review Display</h2>
      <p>{review.content}</p>
      <p>{review.rating}</p>
      <p>{review.tissue ? '휴지 있음' : '휴지 없음'}</p>
    </div>
  );
}

export default ReviewDisplay;