import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/full-logo.svg';

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
  font-family: SegoeUI;
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

interface INavDropdown {
  name: string;
  route: string;
}

interface INavItem {
  dropdown?: INavDropdown[];
  name: string;
  route: string;
}

type NavbarProps = {
  navlist?: INavItem[],
};

type NavbarState = {
  hover: string | null,
};

export default class Navbar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);

    this.state = {
      hover: null,
    };

    this.onHover = this.onHover.bind(this);
    this.onLeave = this.onLeave.bind(this);
  }

  public render() {
    const { navlist = [] } = this.props;
    const { hover } = this.state;

    return (
      <Container>
        <Content>
          <Brand>
            <LogoWrap to="/">
              <Logo src={logo} />
            </LogoWrap>
          </Brand>
          <NavList
            onMouseLeave={this.onLeave}
          >
            {navlist.map((navitem, idx) => {
              return (
                <NavItem key={idx}>
                  <NavLink
                    to={navitem.route}
                    onMouseOverCapture={() => this.onHover(navitem)}
                  >
                    {navitem.name}
                  </NavLink>
                  {(() => {
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
                  })()}
                </NavItem>
              );
            })}
          </NavList>
        </Content>
      </Container>
    );
  }

  private onHover(item: INavItem) {
    this.setState({
      hover: item.name,
    });
  }

  private onLeave() {
    this.setState({
      hover: null,
    });
  }
}
