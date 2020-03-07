import React, { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@smooth-ui/core-sc';
import { IconType } from 'react-icons';

import { Container } from '../../types/Container';

interface IconLinkProps extends Container {
  Icon?: IconType;
  error?: boolean;
}

const IconWrapper: FC<IconLinkProps> = ({ children, Icon, error }) => {
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

export default IconWrapper;
