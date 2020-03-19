import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@kiwicom/orbit-components';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from '../style/theme';
import StretchingGrid from '../components/StretchingGrid';
import { BookmarkProvider } from './Bookmark/BookmarkProvider';
import Bookmark from './Bookmark';
import CreateBookmark from './CreateBookmark';
import GridCell from '../components/GridCell';

import { ReactComponent as Logo } from '../logo.svg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    width: 100vw;
    height: 100vh;
    background: ${({ theme: { orbit } }) => orbit.backgroundBody}
  }
  #root {
    width: 100%;
    height: 100%;
  }
`;

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StretchingGrid columns="1fr 80% 1fr" rows="100px 1fr">
        <GridCell columnLine={2}  alignSelf="center">
          <Logo height="40px" title="batch url"/>
        </GridCell>
        <GridCell columnLine={2} rowLine={2}>
          <Router>
            <GlobalStyle />
            <Switch>
              <Route path="/:bookmarkId">
              <BookmarkProvider>
                <Bookmark />
              </BookmarkProvider>
            </Route>
              <Route path="/">
                <CreateBookmark />
              </Route>
            </Switch>
          </Router>
        </GridCell>
      </StretchingGrid>
    </ThemeProvider>
  );
};

export default App;
