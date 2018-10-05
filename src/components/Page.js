// @flow

import React, { type Node } from 'react';
import Head from 'next/head';

type Props = {
  children: Node,
  title?: string
};

export default ({ children, title = 'NextJS Desktop Boilerplate' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </div>
);
