import * as React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <Container>
    <Wrapper>
      <Top>
        <Text>
          <strong>커넥션 네트워크</strong>
        </Text>
        <Text>
          (가칭) 커넥션 재능기부단 사회적협동조합
        </Text>
      </Top>
      <Contact>
        <Text>
          <strong>TEL</strong>
          {' '}0507-1304-9899
        </Text>
        <Text>
          <strong>FAX</strong>
          {' '}0504-486-9899
        </Text>
        <Text>
          <strong>Email</strong>
          {' '}support@connectionyouth.org
        </Text>
      </Contact>
      <Links>
        <Text>
          <strong>대표</strong>
          {' '}이제우
        </Text>
        <Text>
          <Link>개인정보처리방침</Link>
        </Text>
        <Text>
          <Link>Contact Us</Link>
        </Text>
      </Links>
    </Wrapper>
  </Container>
);

export default Footer;

const Container = styled.footer`
  height: 5rem;
  width: 100%;
  background-color: #414141;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  align-items: flex-start;
  font-family: 'SegoeUI';
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;

  @media (max-width: 840px) {
    width: 95%;
  }
`;

const Top = styled.div`
  display: flex;
`;

const Text = styled.span`
  position: relative;
  font-family: 'SegoeUI';
  font-size: .9rem;
  font-weight: 300;
  line-height: 1.33;
  color: #ffffff;

  @media (max-width: 650px) {
    font-size: .8rem;

    &:not(:last-child) {
      margin-right: .5rem;
      padding-right: .5rem;
    }
  }

  &:not(:last-child) {
    margin-right: .5rem;
    padding-right: .5rem;
  }

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -2px;
    transform: translateY(-50%);
    width: 1px;
    height: 1rem;
    background: white;
  }

  strong {
    font-weight: 700;
    color: white;
  }
`;

const Contact = styled.div`
  display: flex;
`;

const Links = styled.div`
  display: flex;
`;

const Link = styled.a`
  font-weight: 600;
  color: #298fe3;
`;
