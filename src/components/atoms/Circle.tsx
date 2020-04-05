import styled, { css } from 'styled-components';

type CircleProps = {
  size: number;
};

const Circle = styled.figure<CircleProps>`
  display: inline-block;
  vertical-align: text-top;
  border-radius: 50%;
  background-color: #298fe3;

  ${({ size }) => size && css`
    width: ${size}px;
    height: ${size}px;
  `};
`;

export default Circle;
