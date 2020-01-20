import * as React from 'react';
import styled from 'styled-components';

export interface INetwork {
  name: string;
  desc: string;
  image: string;
}

type NetworkProps = {
  network: INetwork;
  current?: string;
  onClick?: (name: string) => void;
};

export const Network: React.FC<NetworkProps> = ({ network, current = '', onClick }) => {
  const { name, desc, image } = network;
  return (
    <Container
      className={current === name ? 'current' : ''}
      // tslint:disable-next-line:no-empty
      onClick={onClick ? () => onClick(name) : () => {}}
    >
      <Image
        src={require(`../../assets/networks/${image}`)}
      />
      <Info>
        <Name>
          {name}
        </Name>
        <Desc>
          {desc}
        </Desc>
      </Info>
    </Container>
  );
};

export default Network;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.8rem;
  width: fit-content;
  border-radius: 8px;
  box-shadow: 2px 2px 30px -16px rgba(0,0,0,0.4);
  cursor: pointer;

  img,
  span {
    filter: grayscale(1) opacity(0.5);
  }

  &.current img,
  &.current span {
    filter: unset;
  }
`;

const Image = styled.img`
  width: 55px;
  height: 70px;
  -webkit-user-drag: none;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const Name = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Desc = styled.span`
  font-size: 0.9rem;
  margin-top: 0.3rem;
`;
