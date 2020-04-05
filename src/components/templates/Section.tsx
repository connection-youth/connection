import * as React from 'react';
import styled from 'styled-components';

type SectionProps = {
  title: React.ReactNode,
  desc?: React.ReactNode,
  children?: React.ReactNode,
};

const Section: React.FC<SectionProps> = ({ title, desc = '', children }) => (
  <Container>
    <Header>
      {(() => (
        <>
          {React.isValidElement(title) ? title : <Title>{title}</Title>}
          {React.isValidElement(desc) ? desc :
            desc ? <Desc>{desc}</Desc> : (null)}
        </>
      ))()}
    </Header>
    {children}
  </Container>
);

export default Section;

const Container = styled.section`
  margin-top: 1rem;
`;

const Header = styled.div`
  width: 100%;
  line-height: 1.55;
  padding-bottom: .8rem;
  border-bottom: .5px solid #707070;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  color: #298fe3;
`;

const Desc = styled.p`
  margin-top: .3rem;
  font-size: .8rem;
`;
