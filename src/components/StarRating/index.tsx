import React from 'react';
import styled from 'styled-components';
import { IReview } from '@_types/review';

interface StarRatingProps {
  rating: number;
  setReviewValue?: React.Dispatch<React.SetStateAction<Omit<IReview, 'id'>>>
  isStatic?: boolean;
}


const StarRating = ({ rating, setReviewValue, isStatic }: StarRatingProps) => {

  const handleRatingChange = (e: any) => {
    const selectedRating = parseInt(e.target.value);
    if (setReviewValue) setReviewValue((prev) => ({ ...prev, rating: selectedRating }));
  };

  return (
    <RatingWrapper>
      {[5, 4, 3, 2, 1].map((value) => (
        <React.Fragment key={value}>
          {isStatic ?
            <StarLabelStatic htmlFor={`star${value}`} filled={rating >= value}></StarLabelStatic>
            :
            <>
              <StarInput
                type="radio"
                name="rating"
                id={`star${value}`}
                value={value}
                onChange={handleRatingChange}
                checked={rating === value}
              />
              <StarLabel htmlFor={`star${value}`}></StarLabel>
            </>
          }

        </React.Fragment>
      ))}
    </RatingWrapper>
  );
};


const RatingWrapper = styled.div`
  display: inline-block;
`;

const StarInput = styled.input`
  display: none;
`;

const StarLabel = styled.label<{ filled?: boolean }>`
  float: right;
  cursor: pointer;
  color: #ccc;
  color: ${(props) => (props.filled ? '#ffc107' : '#e4e5e9')};
  transition: color 0.3s;

  &:before {
    content: '\\2605';
    font-size: 20px;
  }

  ${StarInput}:checked ~ &,
  &:hover,
  &:hover ~ & {
    color: #6f00ff;
    transition: color 0.3s;
  }
`;


const StarLabelStatic = styled.label<{ filled?: boolean }>`
  float: right;
  color: #ccc;
  color: ${(props) => (props.filled ? '#ffc6a5' : '#e4e5e9')};

  &:before {
    content: '\\2605';
    font-size: 20px;
  }
`
export default StarRating;