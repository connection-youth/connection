import * as React from 'react';

import PageWithSidemenu from '../../components/templates/PageWithSidemenu';

import navlist from '../../data/navlist.json';

export default class InfoPage extends React.Component {
  public render() {
    const { dropdown }: any = navlist.find(nav => nav.name === 'about');

    return (
      <PageWithSidemenu
        title="커넥션 소개"
        category="About"
        sidemenu={dropdown}
      />
    );
  }
}
