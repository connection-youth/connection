import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';

type SidemenuItemProps = {
  name: string,
  route: string,
  selected?: boolean,
  onClick?: () => void,
};

type SidemenuProps = {
  title: string,
  sidemenu: [SidemenuItemProps],
};

const SidemenuItem: React.FC<SidemenuItemProps> = ({ name, route, selected = false, onClick }) => (
  <Item
    selected={selected}
    onClick={onClick}
  >
    {name}
  </Item>
);

const Sidemenu: React.FC<SidemenuProps & RouteComponentProps> = ({ title, sidemenu, history }) => (
  <Container>
    <List>
      {sidemenu.map((menu, idx) => {
        const { name, route } = menu;
        return (
          <SidemenuItem
            name={name}
            route={route}
            key={`sidemenu-${idx}`}
            selected={name === title}
            onClick={() => history.push(route)}
          />
        );
      })}
    </List>
  </Container>
);

export default withRouter<SidemenuProps & RouteComponentProps<any>, any>(Sidemenu);

const Container = styled.div`
  flex-shrink: 0;
  width: 13rem;
  border-right: .5px solid #d9d9d9;
  padding-left: .5rem;
`;

const List = styled.ul`
  margin-top: .5rem;
`;

type ItemProps = {
  selected: boolean,
};

const Item = styled.li<ItemProps>`
  padding-top: .8rem;
  padding-bottom: .8rem;
  color: #575757;
  font-size: 1rem;
  line-height: 1.47;
  cursor: pointer;

  ${({ selected }) => selected && css`
    color: #298fe3;
  `};
`;
