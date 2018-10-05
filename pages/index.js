import React from 'react';
import styled from 'styled-components';

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
      </Header>
    </ContentContainer>
  </Page>
);

export default Index;
