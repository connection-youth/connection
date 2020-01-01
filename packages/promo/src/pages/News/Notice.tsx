import * as React from 'react';

import Layout from '../../components/Layout';

import navlist from '../../data/navlist.json';

const NoticePage: React.FC = () => {
  const { dropdown }: any = navlist.find(nav => nav.name === 'news');

  return (
    <Layout
      title="공지사항"
      category="News"
      sidemenu={dropdown}
    />
  );
};

export default NoticePage;
