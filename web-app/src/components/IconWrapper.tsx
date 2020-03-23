import React, { FC, ReactNode, Component } from 'react';
import styled, { AnyStyledComponent } from 'styled-components';
import { Stack } from '@kiwicom/orbit-components';
import { Container } from '../types/Container';

interface IconLinkProps extends Container {
  icon: any;
  error?: boolean;
  [containerProps: string]: any;
}

const IconWrapper: FC<IconLinkProps> = ({ children, icon, error }) => {
  const MarginedIcon = styled(icon)`
    color: ${({
      theme: {
        orbit: { primary }
      }
    }) => primary};
  `;

  return (
    <Stack flex>
      <MarginedIcon size="24" />
      {children}
    </Stack>
  );
};

export default IconWrapper;
