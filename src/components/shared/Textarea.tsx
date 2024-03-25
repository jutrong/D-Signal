import styled from 'styled-components';


type TextareaProps = {
  label?: string;
  placeholder: string;
  value: string | number;
  errorMessage?: string;
  height?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = ({ label, placeholder, value, errorMessage, height, onChange }: TextareaProps) => {
  return (
    <TextareaWrap>
      <Label>{label}</Label>
      <ElTextarea placeholder={placeholder} value={value} onChange={onChange} />
      {errorMessage && <ErrorMessage>* {errorMessage}</ErrorMessage>}
    </TextareaWrap>
  );
};

const TextareaWrap = styled.div``;
const ElTextarea = styled.textarea<TextareaProps>`
   width: 100%;
   height: ${({ height }) => height || '100px'};
   border: 1px solid #d5d4dc;
   border-radius: 5px;
   padding: 20px 10px;
   background: none;
   outline: none;
   resize: none;
   font-size: 12px;
   &::placeholder {
     top: 10%;
     font-size: 12px;
     opacity: 0.7;
     font-family: 'Pretendard-ExtraLight';
   }
   &:focus {
     border: 1px solid ${({ theme }) => theme.colors.mainColor};
   }
 `;
const Label = styled.label`
   display: block;
   margin-bottom: 15px;
   font-size: 16px;
   font-family: 'Pretendard-SemiBold';
 `;
const ErrorMessage = styled.div`
   font-size: 12px;
   color: crimson;
   margin-top: 8px;
   margin-left: 4px;
 `;
export default Textarea;
