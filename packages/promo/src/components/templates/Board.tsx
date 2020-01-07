import React, { useState } from 'react';
import styled from 'styled-components';

import Search from '../molecules/Search';
import Select from '../molecules/Select';

type BoardProps = {};

const Board: React.FC<BoardProps> = () => {
  const [query, setQuery] = useState<string>('');

  const onChangeQuery = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <Filter>
        <StyledSelect
          name="카테고리"
          options={[]}
        />
        <StyledSelect
          options={['제목', '내용', '제목+내용']}
        />
        <StyledSearch
          placeholder="검색하고자 하는 내용을 입력하세요"
          value={query}
          onChange={onChangeQuery}
        />
      </Filter>
    </Container>
  );
};

export default Board;

const Container = styled.div`
`;

const Filter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const StyledSelect = styled(Select)`
  margin-left: 0.25rem;

  &:first-child {
    width: 150px;
  }

  &:nth-child(2) {
    width: 100px;
  }
`;

const StyledSearch = styled(Search)`
  width: 300px;
  margin-left: 1px;
`;
