import * as React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import Section from '../../components/templates/Section';

const PartnerPage: React.FC = () => (
  <Layout
    title="파트너"
    category="About"
  >
    <Section
      title="파트너"
      desc="Partners"
    >
      <Content>
        커넥션은 정부 및 공공기관, 비영리단체, 기업과 협력하여 청소년 활동 문화확산에 힘쓰고 있습니다.
      </Content>
    </Section>
    <Section
      title="정부 및 공공기관"
      desc="Government and Public Institutions"
    >
      <Content>
        <PartnerName>
          중소벤처기업부, 창업진흥원
        </PartnerName>
        <PartnerDesc>
          중소벤처기업부와 창업진흥원이 운영하는 청소년 비즈쿨 프로그램의 지원을 받고 있습니다.
        </PartnerDesc>
      </Content>
    </Section>
    <Section
      title="비영리단체"
    >
      <Content />
    </Section>
    <Section
      title="기업"
    >
      <Content>
        <PartnerName>
          아프리카TV 프릭엔
        </PartnerName>
        <PartnerDesc>
          아프리카TV의 자회사인 프릭엔과 청소년 크리에이터 네트워크 운영 협력과 크리에이터 행사 주최를 협력합니다.
        </PartnerDesc>
        <PartnerName>
          캠퍼스멘토
        </PartnerName>
        <PartnerDesc>
          청소년 진로교육 기업인 캠퍼스멘토와 청소년 창업 활성화를 위해 창업 관련 책자, 매뉴얼을 발간합니다. 또한, 캠퍼스멘토는 커넥션을 위해 사무실, 운영비를 후원해주시고 계십니다.
        </PartnerDesc>
        <MoreText>
          공동사업기획, 후원 등 모든 제안은 [미정]@connectionyouth.org로 받고 있습니다.
        </MoreText>
      </Content>
    </Section>
  </Layout>
);

export default PartnerPage;

const Content = styled.div`
  line-height: 1.5;
  margin: 1rem 0;
  margin-bottom: 2rem;
`;

const PartnerName = styled.span`
  color: #298fe3;
  font-weight: bold;
`;

const PartnerDesc = styled.p`
  margin-bottom: 1rem;
`;

const MoreText = styled.p`
  margin-top: 1.5rem;
  color: black;
  font-weight: 500;
`;
