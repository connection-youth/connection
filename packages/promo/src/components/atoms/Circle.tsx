import * as React from 'react';
import styled, { css } from 'styled-components';

type CircleProps = {
  className?: string,
  size: number,
};

const Circle: React.FC<CircleProps> = ({ className, size }) => (
  <Figure
    className={className}
    size={size}
  />
);

export default Circle;

type FigureProps = {
  size: number;
};

const Figure = styled.figure<FigureProps>`
  display: inline-block;
  vertical-align: text-top;
  border-radius: 50%;
  background-color: #298fe3;

  ${({ size }) => size && css`
    width: ${size}px;
    height: ${size}px;
  `};
`;
