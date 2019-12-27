import * as React from 'react';
import styled from 'styled-components';

import Tab from '../../atoms/Tab';
import { Link } from 'react-router-dom';

type ListboxTabBarProps = {
  route: string;
  tabs: string[];
  current: string;
};

const ListboxTabBar: React.FC<ListboxTabBarProps> = ({ route, tabs, current }) => {
  return (
    <TopContainer>
      <TabBarContainer>
        {tabs.map((tab, idx) => (
          <Tab
            key={`tab-${idx}`}
            active={tab === current}
          >
            {tab}
          </Tab>
        ))}
      </TabBarContainer>
      <MoreLink to={route}>
        더보기
      </MoreLink>
    </TopContainer>
  );
};

export default ListboxTabBar;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1.2px solid #d9d9d9;
  padding-bottom: .5rem;
`;

const TabBarContainer = styled.div`
`;

const MoreLink = styled(Link)`
  cursor: pointer;
  font-size: .9rem;
  line-height: 2;
  color: #575757;
`;
