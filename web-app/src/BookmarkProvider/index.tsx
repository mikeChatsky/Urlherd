import React, { useState, useEffect, FC } from 'react';
import { useParams } from 'react-router-dom';

import { getBookmark } from '../api/bookmark';
import { Container } from '../types/Container';

const bookmarkContext = React.createContext({});

const BookmarkProvider: FC<Container> = ({ children }) => {
  const { bookmarkId } = useParams();
  const [ bookmark, setBookmark ] = useState({});
  const [ error, setError ] = useState();

  if (!bookmarkId) {
    return <span>invalid bookmark</span>;
  }

  useEffect(() => {
    const get = async () => {
      try {
        setBookmark(await getBookmark(bookmarkId));
      } catch (error) {
        setError(error);
      }
    };

    get();
  }, []);

  return (
    <bookmarkContext.Provider value={{ bookmark, error, setError }}>
      {children}
    </bookmarkContext.Provider>
  );
};

export { BookmarkProvider, bookmarkContext };
