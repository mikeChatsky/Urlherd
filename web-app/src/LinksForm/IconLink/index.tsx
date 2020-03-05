import React from 'react';
import styled from 'styled-components';
import { Box } from '@smooth-ui/core-sc';
import { IconType } from 'react-icons';

interface IconLinkProps {
  children: React.ReactNode;
  Icon?: IconType;
  error?: boolean;
}

const IconLink: React.FC<IconLinkProps> = ({ children, Icon, error }) => {
  const MarginedIcon = styled(Icon)`
    margin: 0 10px;
    color: ${({ theme: { colors } }) => (error ? colors.error : '')};
  `;

  return (
    <Box row flexWrap="nowrap" alignItems="center">
      <MarginedIcon size="24" />
      {children}
    </Box>
  );
};

export default IconLink;