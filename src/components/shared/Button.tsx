import { ThemeColor } from '@_style/theme';
import { ReactNode } from 'react';
import styled, { css } from "styled-components";

interface ButtonStyle {
  width?: string;
  height?: string;
  $buttonColor?: ThemeColor;
  $hasBorder?: boolean;
  borderColor?: ThemeColor;
  borderRadius?: string;
  $fontColor?: ThemeColor;
  fontSize?: string;
}

interface ButtonProps extends ButtonStyle {
  children: ReactNode;
  className?: string;
}

const Button = ({ className, children, ...rest }: ButtonProps) => {
  return <ButtonStyled className={className} {...rest}>{children}</ButtonStyled >;
}



const ButtonStyled = styled.button<ButtonStyle>`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${({
  theme,
  width = "auto",
  height = "auto",
  $buttonColor = "white",
  $hasBorder = false,
  borderColor = "white",
  borderRadius = "4px",
  $fontColor = "black",
  fontSize = "14px",
}) => css`
    width: ${width};
    height: ${height};
    background-color: ${theme.colors[$buttonColor]};
    border: ${$hasBorder ? `1px solid ${theme.colors[borderColor]}` : "none"};
    border-radius: ${borderRadius};
    color: ${theme.colors[$fontColor]};
    font-size: ${fontSize};
  `}
`;

export default Button;