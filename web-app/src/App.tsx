import React from 'react';
import Axios from 'axios';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Boxer } from "@smooth-ui/core-sc";

import { theme } from './style/theme';
import LinksForm from './links-form/LinksForm';
import StretchingBoxer from './components/StretchingBoxer';

const onSubmit = (links: Array<string>): Promise<void> =>
  Axios.post('/batch', links);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    width: 100vw;
    height: 100vh;
  }
  #root {
    width: 100%;
    height: 100%;
  }
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StretchingBoxer backgroundColor="background">
        <LinksForm onSubmit={onSubmit} />
      </StretchingBoxer>
    </ThemeProvider>
  );
};

export default App;