import React, { FC } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@kiwicom/orbit-components";
import { BrowserRouter as Router } from "react-router-dom";

import theme from "../style/theme";
import StretchingGrid from "../components/StretchingGrid";
import { BookmarkProvider } from "./Bookmark/BookmarkProvider";
import Bookmark from "./Bookmark";
import CreateBookmark from "./CreateBookmark";
import GridCell from "../components/GridCell";
import GlobalStyle from "../style/GlobalStyle";

import { ReactComponent as Logo } from "../logo.svg";

const MainGrid = styled(StretchingGrid)`
  background: ${({ theme: { orbit } }) => orbit.backgroundBody};
`;

const Content = styled(GridCell)`
  max-width: 600px;
`;

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <MainGrid columns="1fr minmax(600px, 80%) 1fr" rows="100px 1fr">
      <GridCell columnLine={2} alignSelf="center">
        <Logo height="40px" title="batch url" />
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
    </MainGrid>
  </ThemeProvider>
);

export default App;
