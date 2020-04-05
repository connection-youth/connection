import * as React from 'react';
import { Route } from 'react-router-dom';

import { About, Contact, Home, Join, News } from '../pages';

const Router: React.FC = () => (
  <div>
    <Route exact path="/" component={Home} />

    {/* 커넥션 소개 */}
    <Route exact path="/about" component={About.Info} />
    {/* 대표 소개 */}
    <Route path="/about/repr" component={About.Repr} />
    {/* 조직도 및 운영진 */}
    <Route path="/about/org" component={About.Org} />
    {/* 자문위원 및 멘토 */}
    <Route path="/about/mentor" component={About.Mentor} />
    {/* 파트너 */}
    <Route path="/about/partners" component={About.Partners} />

    {/* 가입 안내 */}
    <Route exact path="/join" component={Join.Info} />
    {/* 가입 신청 */}
    <Route path="/join/form" component={Join.Form} />

    {/* 소식 */}
    <Route exact path="/news" component={News.News} />

    {/* 공지사항 */}
    <Route exact path="/news/notice" component={News.Notice} />
    {/* 공지사항 - 글 확인 */}
    <Route path="/news/notice/view" component={News.NoticeView} />

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

export default Router;
