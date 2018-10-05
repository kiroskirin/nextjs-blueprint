// @flow

import React, { Component, type Node } from 'react';

type Props = {
  children?: Node,
  options?: string
};

export default class Columns extends Component<Props> {
  render() {
    const { options } = this.props;
    if (options) {
      return <div className={`columns ${options}`}>{this.props.children}</div>;
    }
    return <div className="columns">{this.props.children}</div>;
  }
}
