import * as React from 'react';
import { Route } from 'react-router-dom';

import { About, Contact, Home, Join, News } from '../pages';

class Router extends React.Component {
  public render() {
    return (
      <div>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about/org" component={About.Org} />
        <Route path="/join/form" component={Join.Form} />
        <Route path="/news/notice" component={News.Notice} />
        <Route path="/news/report" component={News.Report} />
        <Route path="/news/external" component={News.External} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default Router;
