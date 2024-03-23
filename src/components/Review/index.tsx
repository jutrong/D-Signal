import { useModalStore } from '@_store/modal';
import * as S from './Review.styles'
import StarRating from '@_components/StarRating';
import RadioButton from '@_components/common/RadioButton';
import { useState } from 'react';
import { IReview } from '@_types/review';
import { useReview } from '@_hooks/Review/useReview';

const Review = ({ postId }: { postId: string }) => {
  const { closeModal } = useModalStore()
  const { writeReview } = useReview({ postId })
  const [reviewValue, setReviewValue] = useState<Omit<IReview, 'id'>>({
    postId: postId,
    content: '',
    rating: 0,
    tissue: false,
    createdAt: new Date(),
    userId: '',
  })
  const onChangeReview = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewValue((prev) => ({ ...prev, content: e.target.value }))
  }

  const onChangeTissue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReviewValue(prev => ({ ...prev, tissue: e.target.value === 'true' }));
  };

  const onSubmit = () => {
    writeReview(reviewValue)
  }

  return (
    <>
      <S.HeaderWrap>
        <S.Header>리뷰 남기기</S.Header>
        <S.CloseBtn
          src="https://cdn1.iconfinder.com/data/icons/freeline/32/close_delete_remove_icon-1024.png"
          alt="취소버튼"
          onClick={closeModal} />
      </S.HeaderWrap>
      <S.Wrap>
        <S.InputWrap>
          <S.ReviewInput
            placeholder="리뷰를 입력해주세요."
            onChange={onChangeReview}
            value={reviewValue.content}
          />
        </S.InputWrap>
        <S.StarRatingWrap>
          <p>청결도 : </p>
          <StarRating rating={reviewValue.rating} setReviewValue={setReviewValue} />
        </S.StarRatingWrap>
        <S.ToiletPaperWrap>
          <p>휴지 유무 : </p>
          <div>
            <RadioButton
              name="tissueOn"
              value="true"
              checked={reviewValue.tissue === true}
              onChange={onChangeTissue}>
              🧻
            </RadioButton>
            <RadioButton
              name="tissueOff"
              value="false"
              checked={reviewValue.tissue === false}
              onChange={onChangeTissue}>
              ❌
            </RadioButton>
          </div>
        </S.ToiletPaperWrap>
        <S.SubmitBtn onClick={onSubmit}>제출</S.SubmitBtn>
      </S.Wrap>
    </>
  );
}

export default Review;