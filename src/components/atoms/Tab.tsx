import * as React from 'react';
import styled, { css } from 'styled-components';

import Circle from './Circle';

type TabProps = {
  active?: boolean,
  children: React.ReactNode,
};

type ConditionalCircleProps = {
  active: boolean,
};

const ConditionalCircle: React.FC<ConditionalCircleProps> = ({ active }) => active ?
  <Circle size={5} /> : null;

const Tab: React.FC<TabProps> = ({ active = true, children }) => {
  return (
    <TabContainer
      active={active}
    >
      {children}
      <ConditionalCircle
        active={active}
      />
    </TabContainer>
  );
};

export default Tab;

type TabContainerProps = {
  active: boolean,
};

const TabContainer = styled.span<TabContainerProps>`
  cursor: pointer;
  color: #a4a4a4;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.63;
  margin-right: .8rem;

  ${({ active }) => active && css`
    color: #575757;
    font-weight: bold;
  `};
`;
