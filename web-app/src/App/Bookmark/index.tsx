import React, { useContext, FC, useEffect } from 'react';
import { bookmarkContext } from './BookmarkProvider';
import TitledPage from '../../components/TitledPage';
import Link from './Link';

const Bookmark: FC = () => {
  const { bookmark } = useContext(bookmarkContext);

  const openLink = (link: string) => window.open(link, '_blank');

  useEffect(() => {
    bookmark?.links?.map(openLink);
  }, [bookmark]);

  return (
    <TitledPage title="Bookmark">
      <div>
        {bookmark?.links?.map((link, index) => (
          <div key={index} >
            <Link link={link} />
          </div>
        ))}
      </div>
    </TitledPage>
  );
};

export default Bookmark;
