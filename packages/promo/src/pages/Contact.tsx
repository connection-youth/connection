import * as React from 'react';

import Content from '../components/atoms/Content';
import Page from '../components/templates/Page';

const ContactPage: React.FC = () => {
  return (
    <Page
      name="Contact Us"
      path="Contact Us"
    >
      <Content />
    </Page>
  );
};

export default ContactPage;
