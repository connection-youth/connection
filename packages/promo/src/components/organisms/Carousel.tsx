import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import DefaultWelcome, { MobileWelcome } from '../molecules/Welcome';

interface ICarousel {
  title: string;
  date: string;
}

type CarouselProps = {
  carousels: ICarousel[],
  duration: number,
  isMobile?: boolean;
};

const Carousel: React.FC<CarouselProps> = ({ carousels, duration, isMobile = false }) => {
  const [current, setCurrent] = useState<number>(0);
  const [carousel, setCarousel] = useState<ICarousel>(carousels[0]);
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout | undefined>(undefined);

  const moveTo = (idx: number): void => {
    setCurrent(idx);
    refreshCarousel();
  };

  const refreshCarousel = (): void => {
    const outdatedID = intervalID;
    if (outdatedID) {
      clearInterval(outdatedID);
    }

    setIntervalID(
      setInterval(
        () => {
          setCurrent(
            prevCurrent =>
            (prevCurrent < carousels.length - 1) ?
            prevCurrent + 1 : 0,
          );
        },
        duration,
      ),
    );
  };

  useEffect(
    refreshCarousel,
    [],
  );

  useEffect(
    () => {
      setCarousel(carousels[current]);
    },
    [carousels, current],
  );

  return (
    <Wrapper>
      <Container>
        <Image src={require(`../../assets/carousel/${current + 1}.png`)} />
        <ImageCover>
          <Content>
            <DefaultWelcome isMobile={isMobile} />
            <Meta>
              <MetaTitle>
                {carousel.title}
              </MetaTitle>
              <MetaDate>
                {carousel.date}
              </MetaDate>
              <Controller>
                {[...Array(carousels.length)].map((_, idx) => {
                  return (
                    <Circle
                      key={`circle-${idx}`}
                      current={idx === current}
                      onClick={() => moveTo(idx)}
                    />
                  );
                })}
              </Controller>
            </Meta>
          </Content>
        </ImageCover>
      </Container>
      <MobileWelcome isMobile={isMobile} />
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
`;

const Container = styled.div`
  position: relative;
  height: 35rem;

  @media (max-height: 1000px) {
    height: 25rem;
  }

  @media (max-width: 500px) {
    height: 20rem;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 0 50%;
  z-index: -1;

  @media (max-width: 650px) {
    object-position: unset;
  }
`;

const ImageCover = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, #000000 100%);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 70%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  color: #fff;

  @media (max-width: 500px) {
    width: 70%;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;

  @media (max-width: 500px) {
    margin-left: auto;
    padding-bottom: 1.5rem;
  }
`;

const MetaTitle = styled.span`
  text-align: right;
  line-height: 1.43;
  font-size: .8rem;
  color: white;

  @media (max-width: 500px) {
    font-size: 1.1rem;
  }
`;

const MetaDate = styled.span`
  text-align: right;
  line-height: 1.5;
  font-size: .65rem;
  color: white;

  @media (max-width: 500px) {
    font-size: .8rem;
  }
`;

const Controller = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 500px) {
    display: none;
  }
`;

type CircleProps = {
  current: boolean;
};

const Circle = styled.figure<CircleProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  margin-left: .6rem;
  cursor: pointer;

  ${({ current }) => current && css`
    width: 20px;
    height: 10px;
    border-radius: 4px;
    background-color: #298fe3;
  `};
`;
