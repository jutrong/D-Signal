import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { FontStyle, theme } from '@_style/theme';
import GlobalStyle from '@_style/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <FontStyle />
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </ThemeProvider>

    </RecoilRoot >

  </React.StrictMode>
);

serviceWorkerRegistration.register();

