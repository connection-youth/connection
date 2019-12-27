import * as React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <Container />
);

export default Footer;

const Container = styled.footer`
  height: 5rem;
  width: 100%;
  background-color: #414141;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: SegoeUI;
  font-size: 1rem;
  line-height: 1.33;
  color: #ffffff;
`;
