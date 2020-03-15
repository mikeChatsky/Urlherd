import React, { FC, ReactNode } from 'react';
import { Heading } from "@kiwicom/orbit-components";
import StretchingGrid from './StretchingGrid';
import GridCell from './GridCell';
import styled from 'styled-components';

interface TitledPageProps {
  title: string;
  children: ReactNode;
}

const TitledPage: FC<TitledPageProps> = ({ title, children }) => (
  <StretchingGrid rows="1fr 3fr" rowGap="5%">
    <GridCell rowLine="1" alignSelf="end">
      <Heading type="display">{title}</Heading>
    </GridCell>
    <GridCell rowLine="2">
      {children}
    </GridCell>
  </StretchingGrid>
);

export default TitledPage;
