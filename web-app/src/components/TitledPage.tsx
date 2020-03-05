import React from 'react';
import { Box, Text } from '@smooth-ui/core-sc';
import StretchingBox from './StretchingBox';

interface TitledPageProps {
  title: string;
  children: React.ReactNode;
}

const TitledPage: React.FC<TitledPageProps> = ({ title, children }) => (
  <StretchingBox col={1} display="flex" flexDirection="column">
    <Box marginTop="200px">
      <Text variant="h1">{title}</Text>
    </Box>
    <Box flex={1} marginTop="5%">
      {children}
    </Box>
  </StretchingBox>
);

export default TitledPage;
