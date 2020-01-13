import * as React from 'react';
import styled from 'styled-components';

type SelectProps = {
  className?: string;
  name?: string;
  options: string[];
};

const Select: React.FC<SelectProps> = ({
  className = '',
  name = '',
  options,
}) => {
  return (
    <Wrapper className={className}>
      <StyledSelect>
        {name && <Option value="" disabled selected>{name}</Option>}
        {options.map((option, idx) => (
          <Option key={`option-${idx}`}>
            {option}
          </Option>
        ))}
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;

const Wrapper = styled.div`
  padding-top: .3rem;
  padding-bottom: .3rem;
  padding-left: .5rem;
  padding-right: .5rem;
  border: .5px solid #a4a4a4;
  background-color: #fff;
  display: inline-block;
  background-image: url("../assets/icons/arrow-down.svg");
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: .5rem;
`;

const StyledSelect = styled.select`
  width: 100%;
  background: transparent;
  border: 0;
  border-radius: 0;
  -webkit-appearance: none;
  color: #a4a4a4;
  font-size: 1rem;
  line-height: 1.47;
  outline: none;
`;

const Option = styled.option`
`;
