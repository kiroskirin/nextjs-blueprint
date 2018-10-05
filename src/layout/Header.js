// @flow

import React, { Component, type Node } from 'react';
import styled from 'styled-components';

const BackgroundHeader = styled.div`
  background-color: white;
`;

type Props = {
  children?: Node
};

class Header extends Component<Props> {
  render() {
    return (
      <BackgroundHeader>
        {this.props.children}
      </BackgroundHeader>
    );
  }
}

export default Header;
