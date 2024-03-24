import { DefaultTheme, createGlobalStyle } from 'styled-components';

const size = {
  mobileL: '576px',
  tablet: '768px',
  laptop: '992px',
};

export const FontStyle = createGlobalStyle`
  @font-face{
    font-family: 'Pretendard-Regular';
    src: url('/assets/fonts/Pretendard-Regular.otf') format('otf');
}

`;

export const theme: DefaultTheme = {
  colors: {
    mainColor: '#f2e3c6',
    subColor: '#ffc6a5',
    redColor: '#e6324b',
    blackColor: '#2b2b2b',
    grayColor: '#353634',
  },

  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
};

export type ThemeColor = keyof typeof theme.colors;
