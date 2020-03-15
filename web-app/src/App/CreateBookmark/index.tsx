import React, { FC } from 'react';

import TitledPage from '../../components/TitledPage';
import LinksForm from './LinksForm';

const CreateBookmark: FC = () => (
  <TitledPage title="Create a Bookmark">
    <LinksForm />
  </TitledPage>
);

export default CreateBookmark;
