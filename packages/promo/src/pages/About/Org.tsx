import * as React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import Section from '../../components/templates/Section';

import employeeData from '../../data/employees.json';
import organizationData from '../../data/organization.json';

const organizations = organizationData as any;
const employees = employeeData as any;

const OrgPage: React.FC = () => (
  <Layout
    title="조직도 및 직원"
    category="About"
  >
    <Section
      title="조직도"
      desc="커넥션의 조직도입니다."
    />
    <Chart.Container>
      <Chart.Row>
        <Chart.Cell
          className="top"
        >
          대표
        </Chart.Cell>
      </Chart.Row>
      <Chart.Row>
        <Chart.Cell
          className="middle"
        >
          임원
        </Chart.Cell>
      </Chart.Row>
      <Chart.Row>
        {organizations.map((org: any, idx: number) => (
          <Chart.Col
            key={`org-${idx}`}
          >
            <Chart.Cell
              className="bottom"
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: org.name,
                }}
              />
            </Chart.Cell>
            <Chart.List>
              {org.child.map((item: string, itemID: number) => (
                <Chart.Item
                  key={`item-${idx}-${itemID}`}
                >
                  { item }
                </Chart.Item>
              ))}
            </Chart.List>
          </Chart.Col>
        ))}
      </Chart.Row>
    </Chart.Container>
    <Section
      title="직원"
      desc="커넥션의 소중한 가족들입니다."
    />
    <Employees.Container>
      {employees.map((item: any, idx: number) => (
        <Item.Container
          key={`emp-${idx}`}
        >
          <Item.Image
            src={item.image ? require(`../../assets/profiles/${item.name}.jpg`) : ''}
          />
          <Item.Name>
            {item.name}
          </Item.Name>
          <Item.Position>
            {item.position}
          </Item.Position>
          <Item.Email
            href={`mailto:${item.email}`}
          >
            {item.email}
          </Item.Email>
        </Item.Container>
      ))}
    </Employees.Container>
  </Layout>
);

export default OrgPage;

const Chart = {
  Cell: styled.div`
    margin: auto;
    height: 3rem;
    width: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: .9rem;

    &.top {
      background-color: #3361b8;
    }

    &.middle {
      background-color: #298fe3;
    }

    &.bottom {
      background-color: #37bad6;

      span {
        color: white;
      }
    }
  `,
  Col: styled.div`
    display: flex;
    flex-direction: column;

    &:last-child div.bottom span {
      text-align: center;
      font-size: .8rem;
    }
  `,
  Container: styled.div`
    width: 90%;
    margin: 3.5rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Item: styled.div`
    margin: .5rem auto;
    font-size: .9rem;
  `,
  List: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: .5rem;
  `,
  Row: styled.div`
    width: 100%;
    margin: .8rem 0;
    display: flex;
    justify-content: space-between;
    align-items: self-end;
  `,
};

const Employees = {
  Container: styled.div`
    margin: 2rem 1.5rem;
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(120px,1fr));
  `,
};

const Item = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: .8rem 0;
  `,
  Email: styled.a`
    color: #858585;
    font-size: .8rem;
    line-height: 1;
    margin-top: .2rem;
    text-decoration: none;
    cursor: pointer;
  `,
  Image: styled.img`
    height: 98px;
    width: 98px;
    border-radius: 49px;
    border: solid .5px #707070;
    border: solid 1px rgba(112, 112, 112, .5);
  `,
  Name: styled.span`
    margin-top: .8rem;
    font-size: .9rem;
    font-weight: 600;
  `,
  Position: styled.span`
    color: #858585;
    font-size: .8rem;
    line-height: 1;
    margin-top: .5rem;
    width: inherit;
    word-break: keep-all;
    text-align: center;
  `,
};
