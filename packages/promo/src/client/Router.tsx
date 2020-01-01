import * as React from 'react';
import { Route } from 'react-router-dom';

import { About, Contact, Home, Join, News } from '../pages';

class Router extends React.Component {
  public render() {
    return (
      <div>
        <Route exact path="/" component={Home} />

        {/* 커넥션 소개 */}
        <Route exact path="/about" component={About.Info} />
        {/* 대표 소개 */}
        <Route path="/about/repr" component={About.Repr} />
        {/* 조직도 및 직원 */}
        <Route path="/about/org" component={About.Org} />
        {/* 자문위원 및 멘토 */}
        <Route path="/about/mentor" component={About.Mentor} />
        {/* 회원 */}
        <Route path="/about/members" component={About.Member} />
        {/* 파트너 목록 */}
        <Route path="/about/partners" component={About.Partners} />

        {/* 가입 안내 */}
        <Route exact path="/join" component={Join.Info} />
        {/* 가입 신청 */}
        <Route path="/join/form" component={Join.Form} />

        {/* 소식 */}
        <Route exact path="/news" component={News.News} />
        {/* 공지사항 */}
        <Route path="/news/notice" component={News.Notice} />
        {/* 외부 행사 정보 */}
        <Route path="/news/event" component={News.Event} />
        {/* 보도자료 */}
        <Route path="/news/report" component={News.Report} />
        {/* 외부공시 */}
        <Route path="/news/external" component={News.External} />

        {/* 연락 */}
        <Route exact path="/contact" component={Contact} />
      </div>
    );
  }
}

export default Router;
