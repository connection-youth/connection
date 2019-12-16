import * as React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

import navlist from '../data/navlist.json';

const StyledHeader = styled.header`
  width: 100%;
`;

type HeaderProps = {
  children?: React.ReactNode,
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <StyledHeader>
      <Navbar navlist={navlist} />
      {children}
    </StyledHeader>
  );
};

export default Header;
