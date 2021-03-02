import { storiesOf } from '@storybook/react';
import React from 'react';
import { Switch } from '../src/Switch';

storiesOf('Switch', module)
  .add('Standard Switch', () => <Switch />)

  .add('Disabled Switch', () => <Switch disabled={true} />);
