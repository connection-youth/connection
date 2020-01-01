import * as React from 'react';

import Layout from '../../components/Layout';

import navlist from '../../data/navlist.json';

const ReportPage: React.FC = () => {
  const { dropdown }: any = navlist.find(nav => nav.name === 'news');

  return (
    <Layout
      title="보도자료"
      category="News"
      sidemenu={dropdown}
    />
  );
};

export default ReportPage;
