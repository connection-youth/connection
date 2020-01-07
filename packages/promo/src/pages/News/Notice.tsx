import * as React from 'react';

import Layout from '../../components/Layout';
import Board from '../../components/templates/Board';

const NoticePage: React.FC = () => {
  return (
    <Layout
      title="공지사항"
      category="News"
    >
      <Board />
    </Layout>
  );
};

export default NoticePage;
