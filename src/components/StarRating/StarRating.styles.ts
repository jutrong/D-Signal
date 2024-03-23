import styled from 'styled-components';

export const RatingWrapper = styled.div`
  display: inline-block;
`;

export const StarInput = styled.input`
  display: none;
`;

export const StarLabel = styled.label`
  float: right;
  cursor: pointer;
  color: #ccc;
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
