import * as React from 'react';
import windowSize from 'react-window-size';

import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Layout from '../components/Layout';

const carousels = [
  { title: '2019 학생 주도 세미나', date: '2019.07.07' },
  { title: '2020 학생 주도 세미나', date: '2020.07.07' },
  { title: '2021 학생 주도 세미나', date: '2021.07.07' },
  { title: '2022 학생 주도 세미나', date: '2022.07.07' },
  { title: '2023 학생 주도 세미나', date: '2023.07.07' },
];

type HomePageProps = {
  windowWidth: number,
  windowHeight: number,
};

type HomePageState = {
  mount: boolean,
};

class HomePage extends React.Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);

    this.state = {
      mount: false,
    };

    this.isMobile = this.isMobile.bind(this);
  }

  componentDidMount() {
    this.setState({
      mount: true,
    });
  }

  public render() {
    return (
      <Layout>
        <Header />
        <Carousel
          duration={3300}
          carousels={carousels}
          isMobile={this.isMobile()}
        />
      </Layout>
    );
  }

  private isMobile() {
    const { windowWidth } = this.props;
    const { mount } = this.state;
    if (!mount) {
      return false;
    }
    return windowWidth <= 500;
  }
}

export default windowSize(HomePage);
