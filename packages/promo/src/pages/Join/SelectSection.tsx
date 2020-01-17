import React from 'react';
import styled from 'styled-components';

import Network, { INetwork } from './Network';

import Section from '../../components/templates/Section';

/**
 * @todo: move to external data file
 */

const networks: INetwork[] = [
  {
    desc: '비즈쿨 청소년 창업자 커뮤니티',
    image: 'startus.jpg',
    name: '스타터스',
  },
];

const SectionTitle: React.FC = () => (
  <Title>
    <span>네트워크</span>
    를 선택하세요.
  </Title>
);

const SectionDesc: React.FC = () => (
  <Desc>
    가입할 커넥션 네트워크를 선택하세요.
  </Desc>
);

type SelectSectionProps = {
  current?: string;
  onClick: (name: string) => void;
};

export const SelectSection: React.FC<SelectSectionProps> = ({
  current = '', onClick,
}) => {
  return (
    <Section
      title={<SectionTitle />}
      desc={<SectionDesc />}
    >
      <NetworkList>
        {networks.map((network, idx) => (
          <Network
            network={network}
            key={`network-${idx}`}
            current={current}
            onClick={onClick}
          />
        ))}
      </NetworkList>
    </Section>
  );
};

export default SelectSection;

/**
 * @todo: fix dup
 */

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

const NetworkList = styled.div`
  margin-top: 1rem;
  margin-bottom: 3.5rem;
`;
