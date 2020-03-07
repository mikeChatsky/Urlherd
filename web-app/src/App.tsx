import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Box } from "@smooth-ui/core-sc";

import { theme } from './style/theme';
import LinksForm from './LinksForm';
import StretchingBox from './components/StretchingBox';
import { BookmarkProvider } from './BookmarkProvider';
import Bookmark from './Bookmark';

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
      <StretchingBox row backgroundColor="background" justifyContent="center">
        <Box col={4 / 5} maxWidth="1200px" minWidth="800px">
          <Switch>
            <Route path="/:bookmarkId">
              <BookmarkProvider>
                <Bookmark />
              </BookmarkProvider>
            </Route>
            <Route path="/">
              <LinksForm />
            </Route>
          </Switch>
        </Box>
      </StretchingBox>
    </ThemeProvider>
  );
};

export default App;
