import * as React from 'react';
import styled, { css } from 'styled-components';

import nextPageIcon from '../../assets/icons/next-page.svg';
import nextPostIcon from '../../assets/icons/next-post.svg';

export const Controller: React.FC = () => (
  <Container>
    <PageLink
      current={true}
    >
      1
    </PageLink>
    <NextPost
      src={nextPostIcon}
    />
    <NextPage
      src={nextPageIcon}
    />
  </Container>
);

export default Controller;

const Container = styled.div`
  display: flex;
`;

const RoundStyle = css`
  width: 25px;
  height: 25px;
  margin-left: 3px;
`;

type PageLinkProps = {
  current: boolean;
};

const PageLink = styled.span<PageLinkProps>`
  ${RoundStyle}
  color: #575757;
  border-radius: 12.5px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ current }) => current && css`
    color: white;
    background-color: #298fe3;
  `};
`;

const NextPost = styled.img`
  ${RoundStyle}
`;

const NextPage = styled.img`
  ${RoundStyle}
`;
