import * as React from 'react';
import styled from 'styled-components';

const Default = {
  Container: styled.div`
    padding-bottom: 2rem;
  `,
  Rest: styled.p`
    font-size: 1.7rem;
    font-weight: 400;
    line-height: 1.47;
    color: white;
  `,
  Title: styled.h1`
    font-size: 5rem;
    font-family: "Futura";
    color: white;

    @media (max-width: 780px) {
      font-size: 4rem;
    }

    @media (max-width: 650px) {
      font-size: 2.5rem;
    }
  `,
};

const Mobile = {
  Container: styled.div`
    padding: 1.4rem 1.2rem;
  `,
  Rest: styled.p`
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.5;
  `,
  Title: styled.h1`
    font-family: "Futura";
    font-size: 2.5rem;
  `,
};

export type WelcomeProps = {
  isMobile: boolean,
};

const DefaultWelcome: React.FC<WelcomeProps> = ({ isMobile }) => {
  if (!isMobile) {
    return (
      <Default.Container>
        <Default.Title>
          Welcome
        </Default.Title>
        <Default.Rest>
          To Connection
        </Default.Rest>
      </Default.Container>
    );
  }
  return (null);
};

export const MobileWelcome: React.FC<WelcomeProps> = ({ isMobile }) => {
  if (isMobile) {
    return (
      <Mobile.Container>
        <Mobile.Title>
          Welcome
        </Mobile.Title>
        <Mobile.Rest>
          To Connection
        </Mobile.Rest>
      </Mobile.Container>
    );
  }
  return (null);
};

export default DefaultWelcome;
