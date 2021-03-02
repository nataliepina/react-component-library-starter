import { storiesOf } from '@storybook/react';
import React from 'react';
import { Checkbox } from '../src/Checkbox';

storiesOf('Checkbox', module)
  .add('Standard Checkbox', () => <Checkbox label={'Standard Checkbox'} />)

  .add('Disabled Checkbox', () => <Checkbox disabled={true} label={'Disabled Checkbox'} />)

  .add('Indeterminate Checkbox', () => (
    <Checkbox value={'check'} label={'Indeterminate Checkbox'} />
  ));
