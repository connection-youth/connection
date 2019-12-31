import * as React from 'react';

import Content from '../../components/atoms/Content';
import PageWithSidemenu from '../../components/templates/PageWithSidemenu';
import Section from '../../components/templates/Section';

import navlist from '../../data/navlist.json';

export default class FormPage extends React.Component {
  public render() {
    const { dropdown }: any = navlist.find(nav => nav.name === 'join');

    return (
      <PageWithSidemenu
        title="가입 신청"
        category="Join"
        sidemenu={dropdown}
      >
        <Content>
          <Section
            title="커넥션 멤버 가입 신청 페이지입니다."
            desc="신청서 작성 후 완료 버튼을 눌러주세요.
            내부 협의를 거쳐 최종 가입 여부를 안내 드립니다. (1~3주 이내)"
          />
        </Content>
      </PageWithSidemenu>
    );
  }
}
