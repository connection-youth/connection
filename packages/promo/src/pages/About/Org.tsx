import * as React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import Section from '../../components/templates/Section';

import employeeData from '../../data/employees.json';
import organizationData from '../../data/organization.json';

interface IEmployee {
  name: string;
  position: string;
  task: string;
  email?: string;
  image?: boolean;
}

const organizations = organizationData as any;
const employees = employeeData as IEmployee[];

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
      {employees.map((item: any, idx: number) => {
        const { image = false, name, position, task, email = '' } = item;
        return (
          <Item.Container
            key={`emp-${idx}`}
          >
            <Item.Image
              src={image ? require(`../../assets/profiles/${item.name}.jpg`) : ''}
            />
            <Item.Meta>
              <Item.Info>
                <Item.Name>
                  {name}
                </Item.Name>
                <Item.Position>{position}</Item.Position>
                <Item.Task>{task ? ` / ${task}` : ''}</Item.Task>
              </Item.Info>
              <Item.Email
                href={`mailto:${email}`}
              >
                {email}
              </Item.Email>
            </Item.Meta>
          </Item.Container>
        );
      })}
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
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
};

const Item = {
  Container: styled.div`
    display: flex;
    align-items: center;
    margin: .8rem 1.5rem;
  `,
  Email: styled.a`
    color: #858585;
    font-size: .8rem;
    line-height: 1;
    margin-top: 0.3rem;
    text-decoration: none;
    display: block;
    cursor: pointer;
    transition: color 0.3s ease-in;

    &:hover,
    &:focus {
      color: #298fe3;
    }
  `,
  Image: styled.img`
    height: 98px;
    width: 98px;
    border-radius: 49px;
    border: solid .5px #707070;
    border: solid 1px rgba(112, 112, 112, .5);
    object-fit: cover;
  `,
  Name: styled.span`
    margin-top: .8rem;
    font-size: 1.2rem;
    font-weight: 600;
    margin-right: .3rem;
  `,
  Meta: styled.div`
    margin-left: 1rem;
  `,
  Info: styled.div`
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
  Task: styled.span`
    color: #858585;
    font-size: .8rem;
    line-height: 1;
    margin-top: .5rem;
    width: inherit;
    word-break: keep-all;
    text-align: center;
  `,
};
