import * as React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import Section from '../../components/templates/Section';

import organizationData from '../../data/organization.json';

const organizations = organizationData as any;

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
    color: #575757;
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
