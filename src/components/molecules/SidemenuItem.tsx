import * as React from 'react';
import styled, { css } from 'styled-components';

export type SidemenuItemProps = {
  name: string;
  route?: string;
  newtab?: string;
  selected?: boolean;
  onClick?: () => void;
};

const SidemenuItem: React.FC<SidemenuItemProps> = ({
  name, selected = false, onClick,
}) => (
  <Item
    selected={selected}
    onClick={onClick}
  >
    {name}
  </Item>
);

export default SidemenuItem;

type ItemProps = {
  selected: boolean,
};

const Item = styled.li<ItemProps>`
  padding-top: .8rem;
  padding-bottom: .8rem;
  font-size: 1rem;
  line-height: 1.47;
  cursor: pointer;

  ${({ selected }) => selected && css`
    color: #298fe3;
  `};
`;
