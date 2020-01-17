import * as React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import BoardView from '../../components/templates/BoardView';

export const NoticeView: React.FC = () => {
  return (
    <Layout
      title="공지사항"
      category="News"
    >
      <BoardView />
    </Layout>
  );
};

export default NoticeView;
