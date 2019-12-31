import * as React from 'react';
import styled from 'styled-components';

import Footer from '../molecules/Footer';

type BaseProps = {
  children: React.ReactNode,
};

const Base: React.FC<BaseProps> = ({ children }) => {
  return (
    <Container>
      {children}
      <Footer />
    </Container>
  );
};

export default Base;

const Container = styled.div`
`;
