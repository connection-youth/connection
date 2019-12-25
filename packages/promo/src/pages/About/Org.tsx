import * as React from 'react';

import Content from '../../components/Content';
import Page from '../../components/Page';
import Section from '../../components/Section';
import Sidemenu from '../../components/Sidemenu';

import navlist from '../../data/navlist.json';

export default class OrgPage extends React.Component {
  public render() {
    const { dropdown }: any = navlist.find(nav => nav.name === 'about');

    return (
      <Page
        name="조직도 및 직원"
        path="About > 조직도 및 직원"
      >
        <Sidemenu
          title="조직도 및 직원"
          sidemenu={dropdown}
        />
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
      </Page>
    );
  }
}
