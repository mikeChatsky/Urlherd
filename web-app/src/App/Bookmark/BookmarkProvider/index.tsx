import React, { useEffect, FC } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '../../../types/Container';
import { AxiosError } from 'axios';
import { useBookmark } from '../../../api/bookmark';

interface ContextValue {
  bookmark?: any;
  error?: AxiosError;
}

const bookmarkContext = React.createContext<ContextValue>({});

const BookmarkProvider: FC<Container> = ({ children }) => {
  const { bookmarkId } = useParams();
  const { getBookmark, error, bookmark } = useBookmark();

  useEffect(() => {
    // TODO: setError
    if (bookmarkId) {
      getBookmark(bookmarkId);
    }
  }, []);

  return (
    <bookmarkContext.Provider value={{ bookmark, error }}>
      {children}
    </bookmarkContext.Provider>
  );
};

export { BookmarkProvider, bookmarkContext };
