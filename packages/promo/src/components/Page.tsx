import * as React from 'react';

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
      <Title
        name={name}
        path={path}
      />
      {children}
    </Layout>
  );
};

export default Page;
