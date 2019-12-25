import * as React from 'react';
import styled, { css } from 'styled-components';

type SidemenuItemProps = {
  name: string,
  route: string,
  selected?: boolean,
};

type SidemenuProps = {
  title: string,
  sidemenu: [SidemenuItemProps],
};

const SidemenuItem: React.FC<SidemenuItemProps> = ({ name, route, selected = false }) => (
  <Item selected={selected}>
    {name}
  </Item>
);

const Sidemenu: React.FC<SidemenuProps> = ({ title, sidemenu }) => (
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
          />
        );
      })}
    </List>
  </Container>
);

export default Sidemenu;

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
