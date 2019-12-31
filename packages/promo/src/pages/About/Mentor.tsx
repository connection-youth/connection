import * as React from 'react';

import PageWithSidemenu from '../../components/templates/PageWithSidemenu';

import navlist from '../../data/navlist.json';

export default class MentorPage extends React.Component {
  public render() {
    const { dropdown }: any = navlist.find(nav => nav.name === 'about');

    return (
      <PageWithSidemenu
        title="자문위원 및 멘토"
        category="About"
        sidemenu={dropdown}
      />
    );
  }
}
