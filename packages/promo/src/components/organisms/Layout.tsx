import * as React from 'react';
import styled from 'styled-components';

import Footer from '../molecules/Footer';

type LayoutProps = {
  children: React.ReactNode,
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
`;
