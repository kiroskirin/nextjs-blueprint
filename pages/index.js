import React from 'react';
import styled from 'styled-components';
import { Button } from '@blueprintjs/core';

import Page from '../src/components/Page';
import Header from '../src/layout/Header';

const ContentContainer = styled.div`
  font-size: 17px;
`;

const Index = () => (
  <Page>
    <ContentContainer>
      <Header>
        <p>Hello NextJs</p>
        <Button icon="annotation">Hello Blueprint JS</Button>
      </Header>
    </ContentContainer>
  </Page>
);

export default Index;
