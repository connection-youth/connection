import * as React from 'react';

import Layout from '../../components/Layout';
import BoardView, { IContent } from '../../components/templates/BoardView';

const content: IContent = {
  id: 130,
  date: '2019-07-27',
  title: '커넥션 공지사항 커넥션 공지사항 커넥션 공지사항 커넥션 공지사항',
  author: '관리자',
  views: 1,
  category: '회계 정보',
  file: '2019년도 상반기 Connection 재무제표.pdf',
  article: '응모 주제 및 지원 자격',
};

export const NoticeView: React.FC = () => {
  return (
    <Layout
      title="공지사항"
      category="News"
    >
      <BoardView
        content={content}
      />
    </Layout>
  );
};

export default NoticeView;
