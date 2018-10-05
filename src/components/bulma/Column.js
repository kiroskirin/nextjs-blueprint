// @flow

import React, { Component, type Node } from 'react';

type Props = {
  children?: Node,
  options?: string
}

export default class Column extends Component<Props> {
  render() {
    const { options } = this.props;
    if (options) {
      return <div className={`column ${options}`}>{this.props.children}</div>;
    }
    return <div className="column">{this.props.children}</div>;
  }
}
