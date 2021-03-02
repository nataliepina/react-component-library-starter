import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button } from '../src/Button';

storiesOf('Buttons', module).add('Primary Button', () => (
  <Button buttonText={'Primary Button'}></Button>
));
