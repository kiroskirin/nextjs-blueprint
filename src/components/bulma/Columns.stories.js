import React from 'react';
import { storiesOf } from '@storybook/react';

import Columns from './Columns';
import Column from './Column';

storiesOf('Columns', module).add('no child', () => (
  <Columns>
    No child
  </Columns>
)).add('with column', () => (
  <Columns>
    <Column>1</Column>
  </Columns>
)).add('with options', () => (
  <Columns>
    <Column>1</Column>
    <Column>2</Column>
    <Column>3</Column>
  </Columns>
));
