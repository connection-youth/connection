import * as React from 'react';
import styled from 'styled-components';

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

export default class HomePage extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
        <Carousel duration={3300} carousels={carousels} />
      </Layout>
    );
  }
}
