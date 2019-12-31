import * as React from 'react';

import Content from './atoms/Content';
import Sidemenu, { SidemenuProps } from './organisms/Sidemenu';
import Page from './templates/Page';

type LayoutProps = {
  category: string,
  children?: React.ReactNode,
};

export const Layout: React.FC<LayoutProps & SidemenuProps> = ({
  title, category, sidemenu, children,
}) => (
    <Page
      name={title}
      path={`${category} > ${title}`}
    >
      <Sidemenu
        title={title}
        sidemenu={sidemenu}
      />
        <Content>
          {children}
        </Content>
    </Page>
  );

export default Layout;
