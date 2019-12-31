import * as React from 'react';

import Content from '../../components/atoms/Content';
import PageWithSidemenu from '../../components/templates/PageWithSidemenu';
import Section from '../../components/templates/Section';

import navlist from '../../data/navlist.json';

export default class OrgPage extends React.Component {
  public render() {
    const { dropdown }: any = navlist.find(nav => nav.name === 'about');

    return (
      <PageWithSidemenu
        title="조직도 및 직원"
        category="About"
        sidemenu={dropdown}
      >
        <Content>
          <Section
            title="조직도"
            desc="커넥션의 조직도입니다."
          />
          <Section
            title="직원"
            desc="커넥션의 소중한 가족들입니다."
          />
        </Content>
      </PageWithSidemenu>
    );
  }
}
