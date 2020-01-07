import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/full-logo.svg';
import navlist from '../data/navlist.json';

interface INavDropdown {
  name: string;
  route: string;
}

interface INavItem {
  dropdown?: INavDropdown[];
  name: string;
  route: string;
}

interface IConditionalDropdown {
  navitem: INavItem;
  hover: string | null;
}

const ConditionalDropdown: React.FC<IConditionalDropdown> = ({ navitem, hover }) => {
  if (navitem.dropdown && hover === navitem.name) {
    return (
      <NavDropdown>
        {navitem.dropdown.map((item, key) => {
          const { route, name } = item;
          return (
            <NavDropdownItem
              to={route}
              key={key}
            >
              {name}
            </NavDropdownItem>
          );
        })}
      </NavDropdown>
    );
  }
  return (null);
};

interface INavbarItem extends IConditionalDropdown {
  onHover: (item: INavItem) => void;
}

const NavbarItem: React.FC<INavbarItem> = ({ navitem, hover, onHover }) => {
  return (
    <NavItem>
      <NavLink
        to={navitem.route}
        onMouseOverCapture={() => onHover(navitem)}
      >
        {navitem.name}
      </NavLink>
      <ConditionalDropdown
        navitem={navitem}
        hover={hover}
      />
    </NavItem>
  );
};

const Navbar: React.FC = () => {
  const [hover, setHover] = useState<string | null>(null);

  const onHover = (item: INavItem): void => setHover(item.name);

  const onLeave = (): void => setHover(null);

  return (
    <Container>
      <Content>
        <Brand>
          <LogoWrap to="/">
            <Logo src={logo} />
          </LogoWrap>
        </Brand>
        <NavList
          onMouseLeave={onLeave}
        >
          {navlist.map((navitem, idx) => {
            return (
              <NavbarItem
                key={`navbar-item-${idx}`}
                navitem={navitem}
                hover={hover}
                onHover={onHover}
              />
            );
          })}
        </NavList>
      </Content>
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  width: 100%;
  background-color: white;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, .16);
  padding-top: 2.6rem;
  padding-bottom: 2.2rem;
  display: flex;
  justify-content: center;
  align-content: center;

  @media (max-width: 650px) {
    padding: 1.2rem;
  }
`;

const Content = styled.div`
  width: 65%;
  display: flex;
  flex-direction: row;

  @media (max-width: 650px) {
    width: 100%;
  }

  @media (max-width: 890px) {
    width: 80%;
  }

  @media (max-width: 730px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    width: 95%;
  }
`;

const Brand = styled.div`
  display: flex;
`;

const LogoWrap = styled(Link)`
`;

const Logo = styled.img`
  height: 2.7rem;

  @media (max-width: 650px) {
    height: 2.5rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 650px) {
    display: none;
  }
`;

const NavItem = styled.li`
  position: relative;
  display: flex;
  align-self: center;
  font-size: 1.2rem;
  display: inline-flex;
  font-family: 'SegoeUI';
  text-transform: uppercase;
  margin-left: 3rem;
  cursor: pointer;
`;

const NavLink = styled(Link)`
  color: #575757;
  text-decoration: none;
  margin-bottom: .3rem;
  user-select: none;
`;

const NavDropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 2rem;
  left: -3.5rem;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, .16);
  min-width: 9rem;
  z-index: 1;
  padding: 0 1rem;
  padding-bottom: .5rem;
`;

const NavDropdownItem = styled(Link)`
  padding: .7rem 0;
  color: #575757;
  font-size: 1rem;
  line-height: 1.43;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #298fe3;
  }

  &:not(:last-child) {
    border-bottom: solid .5px rgba(0, 0, 0, .16);
  }
`;
