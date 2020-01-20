import * as React from 'react';
import styled from 'styled-components';

type SearchProps = {
  className?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<SearchProps> = ({
  className = '',
  placeholder = '',
  value,
  onChange,
}) => {
  return (
    <Wrapper className={className}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Icon
        src={require('../../assets/icons/search.svg')}
      />
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  display: inline;
  position: relative;
  display: flex;
`;

const Input = styled.input`
  padding-top: .3rem;
  padding-bottom: .3rem;
  padding-left: .5rem;
  padding-right: .5rem;
  width: inherit;
  border: .5px solid #a4a4a4;
  color: #a4a4a4;
  background-color: #fff;
  font-size: 0.9rem;
  line-height: 1.47;
  margin-left: .204rem;

  &::placeholder {
    color: #a4a4a4;
  }
`;

const Icon = styled.img`
  position: absolute;
  right: 0.7rem;
  top: 0.6rem;
  height: 0.9rem;
  width: 0.9rem;
`;
