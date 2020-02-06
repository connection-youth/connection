import * as React from 'react';
import styled, { css } from 'styled-components';

import Layout from '../../components/Layout';
import Section from '../../components/templates/Section';

import histories from '../../data/histories.json';

import startusLogo from '../../assets/networks/startus.jpg';
import dokdo2ndLogo from '../../assets/organizations/2nddokdo.png';
import osyaLogo from '../../assets/organizations/osya.jpg';

interface IHistory {
  date: string;
  content: string;
};

const InfoPage: React.FC = () => (
  <Layout
    title="커넥션 소개"
    category="About"
  >
    <Section
      title="커넥션 소개"
      desc="Connection?"
    >
      <Content>
        커넥션은 <strong>청소년 활동 문화확산에 기여</strong>하기 위해 2019년 4월 설립된 <strong>청소년 자치단체</strong>입니다.<br />
        <br />
        커넥션은 청소년 활동 문화확산과 권익 개선을 위해 여러 사업을 추진하고 있습니다.<br />
        <br />
        첫번째로, 여러 분야에서 활동하는 청소년들의 인적 네트워크 형성과 지원을 위해 분과별 네트워크를 운영하고 있습니다.<br />
        <ImageContainer>
          <img alt="StartUs logo" src={startusLogo} />
        </ImageContainer>
        <br />
        또한, 청소년이 자기주도적으로 활동을 이끌어 갈 수 있도록 산하 활동 및 단체를 기획하고 운영합니다.<br />
        <ImageContainer>
          <img alt="2nd-dokdo logo" src={dokdo2ndLogo} />
          <img alt="OSYA logo" src={osyaLogo} />
        </ImageContainer>
        <br />
      </Content>
    </Section>
    <Section
      title="비전과 미션"
      desc="Vision & Mission"
    >
      <Content>
        커넥션은 우리 사회의 미래인 청소년이 자기주도적으로 4차 산업혁명 시대를 이끌어 나갈 수 있게 지원합니다.<br />
        <div>
          <strong>비전</strong> : 청소년이 자기주도적으로 원하는 일을 하며 이끌어 가는 세상<br />
          <strong>미션</strong> : 세상을 변화시킬 수 있는 청소년이 도전하고 성장할 수 있는 기반 조성
        </div>
      </Content>
    </Section>
    <Section
      title="연혁"
      desc="History"
    >
      <Content>
        <YearContainer>
          <YearSelect>
            <YearButton current={true}>
              2019
            </YearButton>
            <YearButton>
              2020
            </YearButton>
          </YearSelect>
          <YearDescription>
            2019년 출범한 커넥션은 청소년 창업 및 활동 문화 확산을 위해 활동했습니다.
          </YearDescription>
        </YearContainer>
        <HistoryList>
          {histories.map((history: IHistory, idx: number) => {
            const { date, content } = history;
            return (
              <HistoryContainer key={`history-${idx}`}>
                <HistoryDate>
                  {date}
                </HistoryDate>
                <HistoryContent>
                  {content}
                </HistoryContent>
              </HistoryContainer>
            );
          })}
        </HistoryList>
      </Content>
    </Section>
  </Layout>
);

export default InfoPage;

const Content = styled.div`
  line-height: 1.5;
  margin: 2rem 1.5rem;

  strong {
    color: #298fe3;
    font-weight: bold;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  margin-top: 1.5rem;

  img {
    height: 108px;

    &:not(:last-child) {
      margin-right: 0.8rem;
    }
  }
`;

const YearContainer = styled.div`
  margin-bottom: 1rem;
`;

const YearSelect = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

type YearButtonProps = {
  current?: boolean;
};

const YearButton = styled.div<YearButtonProps>`
  font-size: 1.8rem;
  font-family: "Futura";
  color: #a4a4a4;
  padding-right: 0.5rem;
  margin-right: 0.8rem;
  line-height: 1;
  position: relative;
  cursor: pointer;

  &:not(:last-child) {
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -2px;
      transform: translateY(-50%);
      width: 1px;
      height: 1.2rem;
      background: #a4a4a4;
    }
  }

  ${({ current = false }) => current && css`
    color: #298fe3;
  `};
`;

const YearDescription = styled.p`
`;

const HistoryList = styled.dl`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  margin-bottom: 2.5rem;
`;

const HistoryContainer = styled.div`
  padding: 0.5rem 0;
`;

const HistoryDate = styled.dt`
  position: relative;
  float: left;
  width: 150px;
  color: black;
  font-weight: bold;

  &:before {
    content: "";
    width: 9px;
    height: 9px;
    position: absolute;
    border: solid 2px #298fe3;
    border-radius: 50%;
    background-color: #fff;
    display: block;
    left: 110px;
    top: 3px;
    z-index: 1;
  }

  &:after {
    content: "";
    width: 1.8px;
    height: 44px;
    position: absolute;
    background-color: #298fe3;
    top: -7px;
    left: 116px;
  }
`;

const HistoryContent = styled.dl`
`;
