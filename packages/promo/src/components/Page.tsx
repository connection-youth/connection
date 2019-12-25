import * as React from 'react';
import styled from 'styled-components';

import Layout from './Layout';
import Navbar from './Navbar';
import Title from './Title';

type PageProps = {
  name: string,
  path: string,
  children: React.ReactNode,
};

const Page: React.FC<PageProps> = ({ name, path, children }) => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Page;

const Wrap = styled.div`
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
`;

const Main = styled.main`
  display: flex;
  height: 100%;
`;
