import { storiesOf } from '@storybook/react';
import React from 'react';
import { TextArea } from '../src/TextArea';

storiesOf('Textarea', module).add('Textarea', () => (
  <TextArea label={'Comments'} name={'comments'} />
));
