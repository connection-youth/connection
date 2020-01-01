import * as React from 'react';

import Layout from '../../components/Layout';
import Section from '../../components/templates/Section';

const OrgPage: React.FC = () => (
  <Layout
    title="조직도 및 직원"
    category="About"
  >
    <Section
      title="조직도"
      desc="커넥션의 조직도입니다."
    />
    <Section
      title="직원"
      desc="커넥션의 소중한 가족들입니다."
    />
  </Layout>
);

export default OrgPage;
