import * as React from 'react';
import styled from 'styled-components';

import Content from '../components/atoms/Content';
import Page from '../components/templates/Page';

const contacts = [
  { title: 'Address', icon: 'address', value: '경기도 안산시 단원구 사세충열로 94' },
  { title: 'Tel.', icon: 'phone', value: '0507-1304-9899' },
  { title: 'Fax', icon: 'fax', value: '0504-486-9899' },
  { title: 'Email', icon: 'mail', value: 'admin@connectionyouth.org' },
];

type ContactItem = {
  icon: string,
  title: string,
  value: string,
};

const ContactItem: React.FC<ContactItem> = ({ icon, title, value }) => (
  <Item.Container>
    <Item.Row>
      <Item.Icon
        src={require(`../assets/icons/${icon}.svg`)}
      />
      <Item.Title>
        {title}
      </Item.Title>
    </Item.Row>
    <Item.Row>
      {value}
    </Item.Row>
  </Item.Container>
);

const ContactPage: React.FC = () => {
  return (
    <Page
      name="Contact Us"
      path="Contact Us"
    >
      <Contact.Content>
        <Section.WithInfo>
          <Contact.Title>
            How to contact to <span>Connection</span>
          </Contact.Title>
          <Contact.List>
            {contacts.map((({ icon, title, value }, idx) => (
              <ContactItem
                icon={icon}
                title={title}
                value={value}
              />
            )))}
          </Contact.List>
        </Section.WithInfo>
        <Section.WithMap />
      </Contact.Content>
    </Page>
  );
};

export default ContactPage;

const Contact = {
  Content: styled(Content)`
    display: flex;
    justify-content: space-between;
    margin-top: 3.5rem;
  `,
  List: styled.div`
    margin-top: 1rem;
    margin-left: 1rem;
  `,
  Title: styled.h1`
    padding: .4rem 1.2rem;
    margin-bottom: .5rem;
    border-top: .5px solid #298fe3;
    border-bottom: .5px solid #d9d9d9;
    font-size: 1.5rem;
    line-height: 1.48;
    color: #575757;
    font-weight: 400;

    span {
      color: #298fe3;
    }
  `,
};

const Section = {
  WithInfo: styled.div`
    width: 46%;
  `,
  WithMap: styled.div`
    width: 50%;
    height: 20rem;
  `,
};

const Item = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  `,
  Icon: styled.img`
    width: 1rem;
    margin-right: .2rem;
  `,
  Row: styled.span`
    line-height: 1.43;
    color: #575757;
    font-weight: normal;
  `,
  Title: styled.span`
    font-weight: 500;
  `,
};
