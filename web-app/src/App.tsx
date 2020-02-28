import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { theme } from './style/theme';
import LinksForm from './LinksForm';
import StretchingBoxer from './components/StretchingBoxer';

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
        <LinksForm />
      </StretchingBoxer>
    </ThemeProvider>
  );
};

export default App;
