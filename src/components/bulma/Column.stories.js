import React from 'react';
import { storiesOf } from '@storybook/react';

import Column from './Column';

storiesOf('Column', module).add('with empty child', () => (
  <Column>
    Column
  </Column>
)).add('with options has-text-centered', () => (
  <Column options="has-text-centered">
    With Options
  </Column>
));
