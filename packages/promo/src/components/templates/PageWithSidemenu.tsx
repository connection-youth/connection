import * as React from 'react';

import Sidemenu, { SidemenuProps } from '../organisms/Sidemenu';
import Page from './Page';

type PageWithSidemenuProps = {
  category: string,
  children?: React.ReactNode,
};

export const PageWithSidemenu: React.FC<PageWithSidemenuProps & SidemenuProps> = ({
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
      {children}
    </Page>
  );

export default PageWithSidemenu;
