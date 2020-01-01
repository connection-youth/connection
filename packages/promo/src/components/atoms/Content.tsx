import * as React from 'react';
import styled from 'styled-components';

type ContentProps = {
  className?: string,
  children?: React.ReactNode,
};

const Content: React.FC<ContentProps> = ({ className = '', children }) => (
  <Container
    className={className}
  >
    {children}
  </Container>
);

export default Content;

const Container = styled.div`
  flex: 1 1;
  padding-left: 1rem;
  padding-right: 1rem;
`;
