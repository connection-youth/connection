import * as React from 'react';
import { Route } from 'react-router-dom';

import { About, Contact, Home, Join, News } from '../pages';

const routes = [
  {
    component: About.Org,
    path: '/about/org',
  },
  {
    // 가입 신청
    component: Join.Form,
    path: '/join/form',
  },
  {
    // 공지사항
    component: News.Notice,
    path: '/news/notice',
  },
  {
    // 보도자료
    component: News.Report,
    path: '/news/report',
  },
  {
    // 외부공시
    component: News.External,
    path: '/news/external',
  },
  {
    component: Contact,
    path: '/contact',
  },
];

class Router extends React.Component {
  public render() {
    return (
      <div>
        <Route exact={true} path="/" component={Home} />
        {routes.map(({ path, component }, idx) =>
          <Route path={path} component={component} key={idx} />,
        )}
      </div>
    );
  }
}

export default Router;
