import * as React from 'react';
import { Route } from 'react-router-dom';

import { Home, About, Join, News, Contact } from '../pages';

const routes = [
  {
    path: '/about/org',
    component: About.Org,
  },
  {
    // 가입 신청
    path: '/join/form',
    component: Join.Form,
  },
  {
    // 공지사항
    path: '/news/notice',
    component: News.Notice,
  },
  {
    // 보도자료
    path: '/news/report',
    component: News.Report,
  },
  {
    // 외부공시
    path: '/news/external',
    component: News.External,
  },
  {
    path: '/contact',
    component: Contact,
  },
];

class Router extends React.Component {
  public render() {
    return (
      <div>
        <Route exact={true} path="/" component={Home} />
        {routes.map(({ path, component }, idx) =>
          <Route path={path} component={component} key={idx} />
        )}
      </div>
    );
  }
}

export default Router;
