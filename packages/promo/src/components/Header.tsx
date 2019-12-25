import * as React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const StyledHeader = styled.header`
  width: 100%;
`;

type HeaderProps = {
  children?: React.ReactNode,
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <StyledHeader>
      <Navbar />
      {children}
    </StyledHeader>
  );
};

export default Header;
