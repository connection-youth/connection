import * as React from 'react';
import styled from 'styled-components';
import Footer from './Footer';

const Container = styled.div`
`;

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
