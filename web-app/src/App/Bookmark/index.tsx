import React, { useContext, FC, useEffect, Key } from 'react';
import { Stack } from '@kiwicom/orbit-components';

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
      <Stack>
        {bookmark?.links?.map((link: string, index: Key) => (
          <Link key={index} link={link} />
        ))}
      </Stack>
    </TitledPage>
  );
};

export default Bookmark;
