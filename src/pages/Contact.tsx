import * as React from 'react';
import styled from 'styled-components';

import Content from '../components/atoms/Content';
import MapToDimigo from '../components/MapToDimigo';
import Page from '../components/templates/Page';

const contacts = [
  { title: 'Address', icon: 'address', value: '경기도 안산시 단원구 사세충열로 94' },
  { title: 'Tel.', icon: 'phone', value: '070-4680-0380' },
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
                key={`contact-${idx}`}
              />
            )))}
          </Contact.List>
        </Section.WithInfo>
        <Section.WithMap>
          <MapToDimigo />
        </Section.WithMap>
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

    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 2rem;
      padding: 0;
    }
  `,
  List: styled.div`
    margin-top: 1rem;
    margin-left: 1rem;
  `,
  Section: styled.div`
    @media (max-width: 700px) {
      width: 100%;
      margin-bottom: 1rem;

      &:last-child {
        margin-bottom: 2rem;
      }
    }
  `,
  Title: styled.h1`
    padding: .4rem 1.2rem;
    padding-bottom: .2rem;
    margin-bottom: .5rem;
    border-top: .5px solid #298fe3;
    border-bottom: .5px solid #d9d9d9;
    font-size: 1.5rem;
    line-height: 1.48;
    font-weight: 400;

    span {
      color: #298fe3;
    }
  `,
};

const Section = {
  WithInfo: styled(Contact.Section)`
    width: 46%;
  `,
  WithMap: styled(Contact.Section)`
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
    font-weight: normal;
  `,
  Title: styled.span`
    font-weight: 500;
  `,
};
