import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import SidemenuItem, { SidemenuItemProps } from '../molecules/SidemenuItem';

export type SidemenuProps = {
  title: string;
  sidemenu: [SidemenuItemProps];
};

const Sidemenu: React.FC<SidemenuProps & RouteComponentProps> = ({ title, sidemenu, history }) => (
  <Container>
    <List>
      {sidemenu.map((menu, idx) => {
        const { name, route = '', newtab } = menu;
        const onClickSidemenuItem = () => {
          if (newtab) {
            const win = window.open(newtab, '_blank');
            win?.focus();
          } else {
            history.push(route);
          }
        };

        return (
          <SidemenuItem
            name={name}
            route={route}
            key={`sidemenu-${idx}`}
            selected={name === title}
            onClick={onClickSidemenuItem}
          />
        );
      })}
    </List>
  </Container>
);

export default withRouter<SidemenuProps & RouteComponentProps<any>, any>(Sidemenu);

const Container = styled.div`
  flex-shrink: 0;
  width: 10.5rem;
  border-right: .5px solid #d9d9d9;
  padding-left: .5rem;
`;

const List = styled.ul`
  margin-top: .5rem;
`;
