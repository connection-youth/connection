import * as React from 'react';
import styled from 'styled-components';
import { ListboxRow, ListboxTabBar } from '../molecules/Listbox';

interface IPost {
  title: string;
  date: string;
}

type ListboxProps = {
  tabs: string[];
  current: string;
  route: string;
  posts: IPost[];
};

const Listbox: React.FC<ListboxProps> = ({ tabs, current, route, posts }) => {
  return (
    <Box>
      <ListboxTabBar
        tabs={tabs}
        current={current}
        route={route}
      />
      <List>
        {posts.map((post: IPost, idx: number) => {
          const { title, date } = post;
          return (
            <ListboxRow
              key={`post-${idx}`}
              title={title}
              date={date}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default Listbox;

const Box = styled.div`
  width: 30%;

  @media (max-width: 1000px) {
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;

const List = styled.ul`
  list-style-type: none;
`;
