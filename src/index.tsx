import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { FontStyle, theme } from '@_style/theme';
import GlobalStyle from '@_style/global';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>

        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <FontStyle />
            <GlobalStyle />
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>

    </RecoilRoot >

  </React.StrictMode>
);

serviceWorkerRegistration.register();

