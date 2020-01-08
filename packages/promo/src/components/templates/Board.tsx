import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Search from '../molecules/Search';
import Select from '../molecules/Select';

interface IPost {
  author: string;
  category: string;
  created: string;
  file: string | null;
  title: string;
  views: number;
}

const examplePosts: IPost[] = [
  {
    author: '관리자',
    category: '카테고리',
    created: '2019-07-27',
    file: null,
    title: '커넥션 공지사항 커넥션 공지사항 커넥션 공지사항 커넥션 공지사항',
    views: 2,
  },
  {
    author: '관리자',
    category: '카테고리',
    created: '2019-07-27',
    file: null,
    title: '커넥션 공지사항 커넥션 공지사항 커넥션 공지사항 커넥션 공지사항',
    views: 2,
  },
];

type BoardProps = {};

const Board: React.FC<BoardProps> = () => {
  const [query, setQuery] = useState<string>('');
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(
    () => {
      setPosts(examplePosts);
    },
    [],
  );

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
      <Content>
        <Total>전체 132건</Total>
        <Table.Container>
          <Table.Head>
            <Table.Row>
              {['번호', '제목', '카테고리', '첨부', '등록자', '등록일', '조회수']
                .map((heading, idx) => (
                  <Table.Heading
                    key={`heading-${idx}`}
                  >
                    {heading}
                  </Table.Heading>
                ),
              )}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {posts.map(({ author, category, created, file, title, views }: IPost, idx: number) => (
              <Post.Container
                key={`post-${idx}`}
              >
                <Post.Field>
                  {idx + 1}
                </Post.Field>
                <Post.Field>
                  {title}
                </Post.Field>
                <Post.Field>
                  {category}
                </Post.Field>
                <Post.Field>
                  {file ? '' : '-'}
                </Post.Field>
                <Post.Field>
                  {author}
                </Post.Field>
                <Post.Field>
                  {created}
                </Post.Field>
                <Post.Field>
                  {views}
                </Post.Field>
              </Post.Container>
            ))}
          </Table.Body>
        </Table.Container>
      </Content>
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

const Content = styled.div`
`;

const Total = styled.p`
  font-size: .85rem;
  margin: 0.5rem 0;
  margin-top: 1rem;
  color: black;
`;

const Table = {
  Body: styled.tbody`
  `,
  Container: styled.table`
    width: 100%;
    font-size: .78rem;
    color: #575757;
  `,
  Head: styled.thead`
    width: 100%;
    background-color: #f2f2f2;
    border-top: .5px solid #707070;
    border-bottom: .5px solid #d9d9d9;
  `,
  Heading: styled.th`
    padding: .5rem 0;
    text-align: center;
    font-weight: 600;

    &:first-child {
      padding-left: .3rem;
    }

    &:nth-child(2) {
      width: 50%;
    }

    &:nth-child(4) {
      width: 8%;
    }

    &:nth-child(5) {
      width: 10%;
    }

    &:last-child {
      padding-right: .3rem;
    }
  `,
  Row: styled.tr`
  `,
};

const Post = {
  Container: styled.tr`
    padding: .4rem 0;
    text-align: center;
    cursor: pointer;
  `,
  Field: styled.td`
    padding-top: .8rem;
    padding-bottom: .8rem;
    border-bottom: .5px solid #d9d9d9;
    text-align: center;
  `,
};
