
import { useReview } from "@_hooks/Review/useReview";
import { IReviewExtended } from "@_types/review";

import * as S from './ReviewDisplay.styles'
import StarRating from "@_components/StarRating";
import Button from "@_components/shared/Button";

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
          <S.ProfileImgWrap>
            <S.Profile src={review.user?.photoURL} />
            <S.UserName>
              {review.user?.displayName}
            </S.UserName>
          </S.ProfileImgWrap>
          <S.DeleteBtnWrap>
            <Button
              $buttonColor="mainColor"
              $hasBorder={true}
              width="50px"
              $fontSize="12px"
              height="30px"
              onClick={onClickDelete}
            >
              삭제
            </Button>
          </S.DeleteBtnWrap>
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