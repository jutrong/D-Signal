import React, { useState } from 'react';
import * as S from './StarRating.styles'
import { IReview } from '@_types/review';

interface StarRatingProps {
  rating: number;
  setReviewValue: React.Dispatch<React.SetStateAction<Omit<IReview, 'id'>>>
}


const StarRating = ({ rating, setReviewValue }: StarRatingProps) => {

  const handleRatingChange = (e: any) => {
    const selectedRating = parseInt(e.target.value);
    setReviewValue((prev) => ({ ...prev, rating: selectedRating }));
  };

  return (
    <S.RatingWrapper>
      {[5, 4, 3, 2, 1].map((value) => (
        <React.Fragment key={value}>
          <S.StarInput
            type="radio"
            name="rating"
            id={`star${value}`}
            value={value}
            onChange={handleRatingChange}
            checked={rating === value}
          />
          <S.StarLabel htmlFor={`star${value}`}></S.StarLabel>
        </React.Fragment>
      ))}
    </S.RatingWrapper>
  );
};

export default StarRating;