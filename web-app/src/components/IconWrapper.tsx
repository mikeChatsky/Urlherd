import React, { FC } from 'react';
import styled from 'styled-components';
import { IconType } from 'react-icons';

import { Container } from '../types/Container';

interface IconLinkProps extends Container {
  Icon?: IconType;
  error?: boolean;
  [containerProps: string]: any;
}

const IconWrapper: FC<IconLinkProps> = ({
  children,
  Icon,
  error,
  ...containerProps
}) => {
  const MarginedIcon = styled(Icon)`
    margin: 0 10px;
    color: ${({ theme: { colors } }) => (error ? colors.error : '')};
  `;

  return (
    <div>
      <MarginedIcon size="24" />
      {children}
    </div>
  );
};

export default IconWrapper;
