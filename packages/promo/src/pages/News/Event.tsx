import * as React from 'react';

import Layout from '../../components/Layout';

import navlist from '../../data/navlist.json';

const EventPage: React.FC = () => {
  const { dropdown }: any = navlist.find(nav => nav.name === 'news');

  return (
    <Layout
      title="외부 행사 정보"
      category="News"
      sidemenu={dropdown}
    />
  );
};

export default EventPage;
