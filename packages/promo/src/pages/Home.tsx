import * as React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import YouthButton from '../components/youth/YouthButton';

export default class HomePage extends React.Component {
  render() {
    return (
      <Layout>
        <YouthButton>
          test
        </YouthButton>
      </Layout>
    );
  }
}
