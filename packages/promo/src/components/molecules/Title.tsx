import * as React from 'react';
import styled from 'styled-components';

type TitleProps = {
  name: string;
  path: string;
};

const Title: React.FC<TitleProps> = ({ name, path }) => {
  return (
    <Container>
      <Name>
        {name}
        <Circle />
      </Name>
      <Path>
        {path}
      </Path>
    </Container>
  );
};

export default Title;

const Container = styled.div`
  margin-top: 2.5rem;
  padding-left: .5rem;
  padding-bottom: 1rem;
  border-bottom: .5px solid #d9d9d9;
`;

const Name = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.48;
`;

const Path = styled.p`
  font-size: .9rem;
  font-weight: normal;
  line-height: 1.47;
  color: #a4a4a4;
`;

const Circle = styled.figure`
  display: inline-block;
  vertical-align: top;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #298fe3;
  margin-left: 5px;
`;
