import React, { useCallback, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import windowSize from 'react-window-size';

import styled from 'styled-components';

import Button from '../components/atoms/Button';
import Footer from '../components/molecules/Footer';
import Carousel from '../components/organisms/Carousel';
import Header from '../components/templates/Header';
import ListboxList from '../components/templates/ListboxList';

import illust from '../assets/illust.png';

const carousels = [
  { title: '2019 학생 주도 세미나', date: '2019.07.07' },
  { title: '2020 학생 주도 세미나', date: '2020.07.07' },
  { title: '2021 학생 주도 세미나', date: '2021.07.07' },
  { title: '2022 학생 주도 세미나', date: '2022.07.07' },
  { title: '2023 학생 주도 세미나', date: '2023.07.07' },
];

interface IHomePageProps extends RouteComponentProps {
  windowWidth: number;
  windowHeight: number;
}

const HomePage: React.FC<IHomePageProps> = ({ history, windowWidth }) => {
  const [mount, setMount] = useState<boolean>(false);

  useEffect(
    () => {
      setMount(true);
    },
    [],
  );

  const isMobile = useCallback(
    () => mount && windowWidth <= 500,
    [mount, windowWidth],
  );

  return (
    <Container>
      <Content>
        <Header />
        <Carousel
          duration={3300}
          carousels={carousels}
          isMobile={isMobile()}
        />
        <ListboxList />
        <Section>
          <Illust src={illust} />
          <Title>Connection?</Title>
          <Desc>
            커넥션은 <strong>청소년 창업</strong> 및 <strong>활동 네트워크</strong>입니다.
          </Desc>
          <Info>
            커넥션은 창업과 여러 활동을 하는 청소년들 간의 네트워크를 구축하고, 지원하기 위해 2019년 5월 출범하였습니다.
          </Info>
          <StyledButton
            onClick={() => history.push('/about')}
          >
            더 보러가기
          </StyledButton>
        </Section>
      </Content>
      <Footer />
    </Container>
  );
};

export default withRouter(windowSize(HomePage));

/**
 * @todo: wrap as component with container, content
 */

const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Content = styled.div`
  padding-bottom: 5rem;
`;

const Wrapper = styled.section`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const Section = styled(Wrapper)`
  height: calc(90vh - 5.8rem);
  margin-top: 5.8rem;
  position: relative;

  @media (max-width: 500px) {
    margin-top: 3rem;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  font-family: "Futura";
  font-weight: bold;
  line-height: 1.1;

  @media (max-width: 780px) {
    font-size: 4rem;
  }

  @media (max-width: 650px) {
    font-size: 2.5rem;
  }

  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

const Desc = styled.span`
  display: block;
  font-size: 1.6rem;
  font-weight: normal;
  line-height: 1.5;
  color: #575757;

  strong {
    font-weight: bold;
  }

  @media (max-width: 500px) {
    display: unset;
    font-size: 1rem;
  }
`;

const Info = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.65;
  letter-spacing: .08px;
  color: #575757;

  @media (max-width: 500px) {
    display: unset;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 2rem;

  @media (max-width: 500px) {
    margin-top: 1rem;
  }
`;

const Illust = styled.img`
  width: 90%;
  z-index: -1;
  position: absolute;
  bottom: 0;
  right: 0;

  @media (max-width: 500px) {
    width: 100%;
  }
`;
