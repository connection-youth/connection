import * as React from 'react';
import styled from 'styled-components';

import Filter from '../organisms/Filter';

import homeButton from '../../assets/icons/home.svg';
import listButton from '../../assets/icons/list.svg';

type NavButtonsProps = {
  className?: string;
};

const NavButtons: React.FC<NavButtonsProps> = ({ className = '' }) => (
  <NavButtonRow
    className={className}
  >
    <NavButton
      src={homeButton}
    />
    <NavButton
      src={listButton}
    />
  </NavButtonRow>
);

const NavButtonRow = styled.div`
  display: flex;
`;

const NavButton = styled.img`
  height: 35px;
  width: 35px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 7.6px;
  }
`;

const TopNav: React.FC = () => (
  <TopContainer>
    <NavButtons />
    <Filter />
  </TopContainer>
);

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

export interface IContent {
  id: number;
  date: string;
  title: string;
  author: string;
  views: number;
  category: string;
  file?: string;
  article: string;
}

type BoardViewProps = {
  content: IContent;
};

export const BoardView: React.FC<BoardViewProps> = ({ content }) => {
  const { id, date, title, author, views, category, file = '', article } = content;
  return (
    <Container>
      <TopNav />
      <ViewHead>
        <SideInfo>{id}/130</SideInfo>
        <SideInfo>{date}</SideInfo>
      </ViewHead>

      <Table.Container>
        <Table.Head>
          <Table.Row>
            <Table.Heading>
              제목
            </Table.Heading>
            <Table.Title>
              {title}
            </Table.Title>
            <Table.Heading>
              등록자
            </Table.Heading>
            <Table.Data>
              {author}
            </Table.Data>
          </Table.Row>
          <Table.Row>
            <Table.Heading>
              카테고리
            </Table.Heading>
            <Table.Data>
              {category}
            </Table.Data>
            <Table.Heading>
              조회수
            </Table.Heading>
            <Table.Data>
              {views}
            </Table.Data>
          </Table.Row>
          <Table.Row>
            <Table.Heading>
              첨부파일
            </Table.Heading>
            <Table.File>
              {file}
            </Table.File>
          </Table.Row>
        </Table.Head>
      </Table.Container>

      <Article>
        {article}

        <BottomNavButtons />
      </Article>

      <Table.Container>
        <Table.Head>
          <Table.Row>
            <Table.Heading>
              다음글
            </Table.Heading>
            <Table.Data>
              스타트업둥지 1st 성과공유회
            </Table.Data>
          </Table.Row>
          <Table.Row>
            <Table.Heading>
              이전글
            </Table.Heading>
            <Table.Data>
              [외부] KOICA와 르호봇이 함께 하는 한국-팔레스타인 네트워킹 데이
            </Table.Data>
          </Table.Row>
        </Table.Head>
      </Table.Container>
    </Container>
  );
};

export default BoardView;

const Container = styled.div`
`;

const ViewHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SideInfo = styled.span`
  color: black;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const Article = styled.div`
  padding: 3rem 0.5rem;
  position: relative;
`;

const BottomNavButtons = styled(NavButtons)`
  position: absolute;
  right: 0;
  bottom: 1rem;
`;

const Table = {
  Container: styled.table`
    width: 100%;
    font-size: 0.9rem;
  `,
  Head: styled.thead`
    border-top: 1px solid #707070;
  `,
  Row: styled.tr`
    border-bottom: 1px solid #d9d9d9;
  `,
  Heading: styled.th`
    display: flex;
    background-color: #f2f2f2;
    font-weight: 600;
    padding: 0.6rem 0.5rem;
  `,
  Data: styled.td`
    padding: 0.6rem 0.5rem;
  `,
  Title: styled.td`
    font-weight: 600;
    padding: 0.6rem 0.5rem;
  `,
  File: styled.td`
    color: #298fe3;
    padding: 0.6rem 0.5rem;
  `,
};
