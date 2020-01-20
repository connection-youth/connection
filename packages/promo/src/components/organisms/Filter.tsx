import React, { useState } from 'react';
import styled from 'styled-components';

import Search from '../molecules/Search';
import Select from '../molecules/Select';

type FilterProps = {};

export const Filter: React.FC<FilterProps> = () => {
  const [query, setQuery] = useState<string>('');

  const onChangeQuery = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  return (
    <FilterContainer>
      <FilterSelect
        name="카테고리"
        options={[]}
      />
      <FilterSelect
        options={['제목', '내용', '제목+내용']}
      />
      <FilterSearch
        placeholder="검색하고자 하는 내용을 입력하세요"
        value={query}
        onChange={onChangeQuery}
      />
    </FilterContainer>
  );
};

export default Filter;

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const FilterSelect = styled(Select)`
  margin-left: 0.25rem;

  &:first-child {
    width: 150px;
  }

  &:nth-child(2) {
    width: 100px;
  }
`;

const FilterSearch = styled(Search)`
  width: 300px;
  margin-left: 1px;
`;
