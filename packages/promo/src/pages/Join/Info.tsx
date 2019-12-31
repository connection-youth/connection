import * as React from 'react';

import Layout from '../../components/Layout';

import navlist from '../../data/navlist.json';

export default class JoinPage extends React.Component {
  public render() {
    const { dropdown }: any = navlist.find(nav => nav.name === 'join');

    return (
      <Layout
        title="가입 안내"
        category="Join"
        sidemenu={dropdown}
      />
    );
  }
}
