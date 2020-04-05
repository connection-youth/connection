import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Layout from '../../components/Layout';
import Board from '../../components/templates/Board';

const NoticePage: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <Layout
      title="공지사항"
      category="News"
    >
      <Board
        onClick={() => history.push('/news/notice/view')}
      />
    </Layout>
  );
};

export default withRouter(NoticePage);
