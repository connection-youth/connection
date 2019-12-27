import * as React from 'react';
import styled from 'styled-components';

import Page from '../../components/Page';
import Sidemenu from '../../components/Sidemenu';
import Content from '../../components/Content';
import Section from '../../components/Section';

import navlist from '../../data/navlist.json';

export default class FormPage extends React.Component {
  public render() {
    const { dropdown }: any = navlist.find(nav => nav.name === 'join');

    return (
      <Page
        name="가입 신청"
        path="Join > 가입 신청"
      >
        <Sidemenu
          title="가입 신청"
          sidemenu={dropdown}
        />
        <Content>
          <Section
            title="커넥션 멤버 가입 신청 페이지입니다."
            desc="신청서 작성 후 완료 버튼을 눌러주세요.
            내부 협의를 거쳐 최종 가입 여부를 안내 드립니다. (1~3주 이내)"
          />
        </Content>
      </Page>
    );
  }
}
