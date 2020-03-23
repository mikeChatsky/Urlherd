import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../types/Container';

interface GridCellProps extends Container {
  rowLine?: number | string;
  columnLine?: number | string;
  alignSelf?: string;
  justifySelf?: string;
}

const GridCell: FC<GridCellProps> = ({
  rowLine,
  columnLine,
  alignSelf,
  justifySelf,
  children,
  className
}) => {
  const CellDiv = styled.div`
    ${rowLine && `grid-row-start:${rowLine};`}
    ${columnLine && `grid-column-start:${columnLine};`}
    ${alignSelf && `align-self:${alignSelf};`}
    ${justifySelf && `justify-self:${justifySelf};`}
  `;

  return <CellDiv className={className}>{children}</CellDiv>;
};

export default GridCell;
