import * as React from 'react';
import styled from 'styled-components';

import Filter from '../organisms/Filter';

import homeButton from '../../assets/icons/home.svg';
import listButton from '../../assets/icons/list.svg';

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

const TopNav: React.FC = () => (
  <TopContainer>
    <NavButtonRow>
      <NavButton
        src={homeButton}
      />
      <NavButton
        src={listButton}
      />
    </NavButtonRow>
    <Filter />
  </TopContainer>
);

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

const NavButtonRow = styled.div`
  display: flex;
`;

const NavButton = styled.img`
  height: 35px;
  width: 35px;

  &:not(:last-child) {
    margin-right: 7.6px;
  }
`;

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
            <Table.Data>
              {title}
            </Table.Data>
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
            <Table.Data>
              {file}
            </Table.Data>
          </Table.Row>
        </Table.Head>
      </Table.Container>

      <Article>
        {article}
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
`;

const SideInfo = styled.span`
`;

const Article = styled.div`
`;

const Table = {
  Container: styled.table`
    width: 100%;
    font-size: .78rem;
    color: #575757;
  `,
  Head: styled.thead`
    border-top: 1px solid #707070;
  `,
  Row: styled.tr`
  `,
  Heading: styled.th`
    display: flex;
    background-color: #f2f2f2;
  `,
  Data: styled.td`
  `,
};
