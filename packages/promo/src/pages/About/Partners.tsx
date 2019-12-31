import * as React from 'react';

import PageWithSidemenu from '../../components/templates/PageWithSidemenu';

import navlist from '../../data/navlist.json';

export default class PartnerPage extends React.Component {
  public render() {
    const { dropdown }: any = navlist.find(nav => nav.name === 'about');

    return (
      <PageWithSidemenu
        title="파트너 목록"
        category="About"
        sidemenu={dropdown}
      />
    );
  }
}
