import React, { useContext, FC } from 'react';

import { bookmarkContext } from "../BookmarkProvider";
import TitledPage from '../components/TitledPage';

const Bookmark: FC = () => {
  const { bookmark } = useContext(bookmarkContext);

  return (
    <TitledPage title="Bookmark">
      {(bookmark && bookmark.links && bookmark.links.length &&
      bookmark.links.map(link => <span>{link}</span>))}
    </TitledPage>
  );
};

export default Bookmark;
