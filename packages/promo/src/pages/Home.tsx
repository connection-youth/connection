import * as React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Layout from '../components/Layout';

export default class HomePage extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
      </Layout>
    );
  }
}
