import * as React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import Section from '../../components/templates/Section';

const FormTitle: React.FC = () => (
  <Title>
    <span>커넥션</span>
    {' '}멤버 가입 신청 페이지입니다.
  </Title>
);

const FormDesc: React.FC = () => (
  <Desc>
    신청서 작성 후 완료 버튼을 눌러주세요.<br />
    내부 협의를 거쳐 최종 가입 여부를 안내 드립니다. (1~3주 이내)
  </Desc>
);

const FormPage: React.FC = () => (
  <Layout
    title="가입 신청"
    category="Join"
  >
    <Section
      title={<FormTitle />}
      desc={<FormDesc />}
    />
  </Layout>
);

export default FormPage;

const Title = styled.h2`
  font-size: 1.2rem;
  color: #575757;

  span {
    color: #298fe3;
  }
`;

const Desc = styled.p`
  margin-top: .3rem;
  font-size: .8rem;
`;
