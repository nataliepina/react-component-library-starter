import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge } from '../src/Badge';

storiesOf('Badge', module)
  .add('Badge using children prop', () => <Badge children={44} />)

  .add('Badge using wrapped text', () => <Badge>99+</Badge>);
