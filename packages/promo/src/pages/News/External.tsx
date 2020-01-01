import * as React from 'react';

import Layout from '../../components/Layout';

import navlist from '../../data/navlist.json';

const ExternalPage: React.FC = () => {
  const { dropdown }: any = navlist.find(nav => nav.name === 'news');

  return (
    <Layout
      title="외부공시"
      category="News"
      sidemenu={dropdown}
    />
  );
};

export default ExternalPage;
