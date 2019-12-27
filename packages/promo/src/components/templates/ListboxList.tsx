import * as React from 'react';
import styled from 'styled-components';

import Listbox from '../organisms/Listbox';

import exampleData from '../../data/examples/listboxes.json';

const ListboxList: React.FC = () => {
  const examples: any = exampleData;
  return (
    <Wrapper>
      <Container>
        <Listbox
          tabs={['공지사항']}
          current="공지사항"
          route=""
          posts={examples.notice}
        />
        <Listbox
          tabs={['보도자료', '외부공시']}
          current="보도자료"
          route=""
          posts={examples.externals}
        />
      </Container>
    </Wrapper>
  );
};

export default ListboxList;

const Wrapper = styled.div`
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const Container = styled.div`
  padding-top: 2.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1000px) {
    padding-top: 1.5rem;
    flex-direction: column;
  }

  @media (max-width: 500px) {
    padding-top: 0;
  }
`;
