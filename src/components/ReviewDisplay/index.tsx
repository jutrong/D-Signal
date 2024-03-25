import { useReview } from "@_hooks/Review/useReview";
import { IReview, IReviewExtended } from "@_types/review";

import * as S from './ReviewDisplay.styles'
import StarRating from "@_components/StarRating";

interface IReviewDisplayProps {
  review: IReviewExtended;
  postId: string;
}

const ReviewDisplay = ({ review, postId }: IReviewDisplayProps) => {
  const { deleteReview } = useReview(postId)

  const onClickDelete = () => {
    deleteReview(review.id)
  }

  return (
    <S.Wrap>
      <S.ReviewWrap>
        <S.ProfileWrap>
          <S.Profile src={review.user?.photoURL} />
          <S.UserName>
            {review.user?.displayName}
          </S.UserName>
        </S.ProfileWrap>
        <S.ReviewContent>
          {review.content}
        </S.ReviewContent>
        <div style={{ display: 'flex', alignItems: "center", gap: "40px" }}>
          <StarRating isStatic={true} rating={review.rating} />
          <div>휴지 여부 :{review.tissue ? <span> 🧻</span> : <span> ❌</span>} </div>
        </div>
      </S.ReviewWrap>
    </S.Wrap>
  );
}

export default ReviewDisplay;