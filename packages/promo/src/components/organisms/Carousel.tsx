import * as React from 'react';
import styled, { css } from 'styled-components';

import DefaultWelcome, { MobileWelcome } from '../molecules/Welcome';

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
  width: 65%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  color: #fff;

  @media (max-width: 500px) {
    width: 85%;
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

  @media (max-width: 500px) {
    font-size: 1.1rem;
  }
`;

const MetaDate = styled.span`
  text-align: right;
  line-height: 1.5;
  font-size: .65rem;

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

interface ICarousel {
  title: string;
  date: string;
}

type CarouselProps = {
  duration: number,
  carousels: ICarousel[],
  isMobile: boolean;
};

type CarouselState = {
  current: number,
  intervalID: number,
};

export default class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);

    this.state = {
      current: 0,
      intervalID: 0,
    };

    this.refreshCarousel = this.refreshCarousel.bind(this);
    this.moveTo = this.moveTo.bind(this);
  }

  public componentDidMount() {
    this.refreshCarousel();
  }

  public render() {
    const { carousels, isMobile = false } = this.props;
    const { current } = this.state;
    const carousel = carousels[current];

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
                        onClick={() => this.moveTo(idx)}
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
  }

  private refreshCarousel() {
    const { carousels, duration } = this.props;
    const { intervalID: outdatedID } = this.state;
    clearInterval(outdatedID);

    const intervalID = setInterval(() => {
      const { current } = this.state;
      this.setState(prevState => ({
        current: (current < carousels.length - 1) ?
          prevState.current + 1 : 0,
      }));
    },                             duration);

    this.setState({
      intervalID,
    });
  }

  private moveTo(idx: number) {
    this.setState({
      current: idx,
    });
    this.refreshCarousel();
  }
}
