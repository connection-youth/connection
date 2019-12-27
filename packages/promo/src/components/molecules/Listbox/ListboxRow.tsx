import * as React from 'react';
import styled from 'styled-components';

type ListboxRowProps = {
  title: string;
  date: string;
};

const ListboxRow: React.FC<ListboxRowProps> = ({ title, date }) => {
  return (
    <RowContainer>
      <Title>
        {title}
      </Title>
      <Date>
        {date}
      </Date>
    </RowContainer>
  );
};

export default ListboxRow;

const RowContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: .6rem;
  padding-bottom: .6rem;
  border-bottom: .5px solid #d9d9d9;
`;

const Title = styled.span`
  cursor: pointer;
  color: #575757;
  font-size: .8rem;
  font-weight: 500;
  line-height: 1.5;
`;

const Date = styled.span`
  color: #575757;
  font-size: .8rem;
  font-weight: normal;
  line-height: 1.5;
`;
