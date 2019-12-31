import * as React from 'react';

import Layout from '../../components/Layout';

import navlist from '../../data/navlist.json';

export default class MentorPage extends React.Component {
  public render() {
    const { dropdown }: any = navlist.find(nav => nav.name === 'about');

    return (
      <Layout
        title="자문위원 및 멘토"
        category="About"
        sidemenu={dropdown}
      />
    );
  }
}
