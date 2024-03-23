import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const RadioButtonLabel = styled.label`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 10px;
  position: relative;
  align-items: center;
  color: white;
  cursor: pointer;

`;

const HiddenRadioInput = styled.input`
  position: absolute;
  opacity: 0;
`;

const Radio = styled.span`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  transform: translateZ(-25px);
  transition: all 0.3s ease-in-out;


  ${HiddenRadioInput}:checked + & {
    border-color: #6f00ff;
    transform: translateZ(0px);
    background-color: #fff;
  }

  ${HiddenRadioInput}:checked + &::before {
    opacity: 1;
  }
`;

const RadioButton = ({ name, value, checked, onChange, children }: {
  name: string,
  value: string,
  checked: boolean,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode
}) => {
  return (
    <RadioButtonLabel>
      <HiddenRadioInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <Radio />
      {children}
    </RadioButtonLabel>
  );
};

export default RadioButton;