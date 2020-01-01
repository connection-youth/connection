import * as React from 'react';

import Content from './atoms/Content';
import Sidemenu from './organisms/Sidemenu';
import Page from './templates/Page';

import navlist from '../data/navlist.json';

type LayoutProps = {
  title: string;
  category: string;
  children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({
  title, category, children,
}) => {
  const { dropdown }: any = navlist.find(nav => nav.name === category.toLowerCase());
  return (
    <Page
      name={title}
      path={`${category} > ${title}`}
    >
      <Sidemenu
        title={title}
        sidemenu={dropdown}
      />
        <Content>
          {children}
        </Content>
    </Page>
  );
};

export default Layout;
