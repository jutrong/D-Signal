import { useModalStore } from '@_store/modal';
import * as S from './Review.styles'
import StarRating from '@_components/StarRating';
import RadioButton from '@_components/common/RadioButton';
import { useState } from 'react';
import { IReview } from '@_types/review';
import { useReview } from '@_hooks/Review/useReview';
import Textarea from '@_components/shared/Textarea';
import Button from '@_components/shared/Button';

// TODO: 빈 값 제출안되게 유효성 검사 후 에러메시지
// TODO: createAt 추가
const Review = ({ postId }: { postId: string }) => {
  const { closeModal } = useModalStore()
  const { addReview } = useReview(postId)
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
    addReview(reviewValue)
    closeModal()
  }

  return (
    <>
      <S.HeaderWrap>
        <S.Header>화장실 리뷰</S.Header>
        <S.CloseBtn
          src="https://cdn1.iconfinder.com/data/icons/freeline/32/close_delete_remove_icon-1024.png"
          alt="취소버튼"
          onClick={closeModal} />
      </S.HeaderWrap>
      <S.Wrap>
        <S.InputWrap>
          <Textarea
            placeholder="리뷰를 입력해주세요."
            onChange={onChangeReview}
            value={reviewValue.content}
            height="120px"
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
        <S.BtnWrap>
          <Button
            $buttonColor="subColor"
            width='80%'
            height="30px"
            onClick={onSubmit}>
            작성하기
          </Button>
        </S.BtnWrap>
      </S.Wrap>
    </>
  );
}

export default Review;