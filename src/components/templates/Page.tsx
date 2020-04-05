import * as React from 'react';
import styled from 'styled-components';

import Navbar from '../Navbar';

import Footer from '../molecules/Footer';
import Title from '../molecules/Title';

type PageProps = {
  name: string,
  path: string,
  children: React.ReactNode,
};

const Page: React.FC<PageProps> = ({ name, path, children }) => {
  return (
    <Container>
      <Content>
        <Navbar />
        <Wrap>
          <Title
            name={name}
            path={path}
          />
          <Main>
            {children}
          </Main>
        </Wrap>
      </Content>
      <Footer />
    </Container>
  );
};

export default Page;

const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Content = styled.div`
  padding-bottom: 5rem;
  min-height: calc(100vh - 5rem);
`;

const Wrap = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
`;

const Main = styled.main`
  display: flex;
  height: 100%;
  min-height: 550px;
`;
