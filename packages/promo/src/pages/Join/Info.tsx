import * as React from 'react';

import PageWithSidemenu from '../../components/templates/PageWithSidemenu';

import navlist from '../../data/navlist.json';

export default class JoinPage extends React.Component {
  public render() {
    const { dropdown }: any = navlist.find(nav => nav.name === 'join');

    return (
      <PageWithSidemenu
        title="가입 안내"
        category="Join"
        sidemenu={dropdown}
      />
    );
  }
}
