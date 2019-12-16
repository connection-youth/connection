import * as React from 'react';
import styled, { css } from 'styled-components';

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

const Welcome = styled.div`
  padding-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-family: "Futura";

  @media (max-width: 780px) {
    font-size: 4rem;
  }

  @media (max-width: 650px) {
    font-size: 2.5rem;
  }
`;

const Rest = styled.p`
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 1.47;
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

const MobileWelcome = styled.div`
  padding: 1.4rem 1.2rem;
`;

const MobileTitle = styled.h1`
  font-family: "Futura";
  font-size: 2.5rem;
`;

const MobileRest = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.5;
`;

interface ICarousel {
  title: string;
  date: string;
}

type CarouselProps = {
  duration: number,
  carousels: ICarousel[],
};

type CarouselState = {
  mount: boolean,
  current: number,
  intervalID: number,
};

export default class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);

    this.state = {
      mount: false,
      current: 0,
      intervalID: 0,
    };

    this.refreshCarousel = this.refreshCarousel.bind(this);
    this.moveTo = this.moveTo.bind(this);
  }

  componentDidMount() {
    this.refreshCarousel();
    this.setState({
      mount: true,
    });
  }

  public render() {
    const { carousels } = this.props;
    const { current } = this.state;
    const carousel = carousels[current];

    return (
      <Wrapper>
        <Container>
          <Image src={require(`../assets/carousel/${current + 1}.png`)} />
          <ImageCover>
            <Content>
              <Welcome>
                <Title>Welcome</Title>
                <Rest>To Connection</Rest>
              </Welcome>
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
        <MobileWelcome>
          <MobileTitle>
            Welcome
          </MobileTitle>
          <MobileRest>
            To Connection
          </MobileRest>
        </MobileWelcome>
      </Wrapper>
    );
  }

  private refreshCarousel() {
    const { carousels, duration } = this.props;
    const { intervalID } = this.state;
    clearInterval(intervalID);
    const _intervalID = setInterval(() => {
      const { current } = this.state;
      if (current < carousels.length - 1) {
        this.setState(prevState => ({
          current: prevState.current + 1,
        }));
      } else {
        this.setState({
          current: 0,
        });
      }
    }, duration);
    this.setState({
      intervalID: _intervalID,
    });
  }

  private moveTo(idx: number) {
    this.setState({
      current: idx,
    });
    this.refreshCarousel();
  }
}
