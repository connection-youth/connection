import * as React from 'react';
import styled from 'styled-components';

type SearchProps = {
  className: string,
  placeholder: string,
};

const Search: React.FC<SearchProps> = ({ className, placeholder }) => {
  return (
    <Wrapper className={className}>
      <Input
        placeholder={placeholder}
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
`;

const Input = styled.input`
  padding-top: .3rem;
  padding-bottom: .3rem;
  padding-left: .5rem;
  padding-right: .5rem;
  width: 40%;
  border: .5px solid #a4a4a4;
  color: #a4a4a4;
  background-color: #fff;
  font-size: 1rem;
  line-height: 1.47;
  margin-left: .204rem;

  &::placeholder {
    color: #a4a4a4;
  }
`;

const Icon = styled.img`
  position: absolute;
  right: .7rem;
  top: .3rem;
  height: 1rem;
  width: 1rem;
`;
