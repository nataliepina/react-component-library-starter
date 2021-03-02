import { storiesOf } from '@storybook/react';
import React from 'react';
import { ToolTip } from '../src/Tooltip';

const Code: React.FC = ({ children }) => {
  return <code style={{ color: 'magenta' }}>{children}</code>;
};

storiesOf('ToolTips', module)
  .add('Top ToolTip (Default)', () => (
    <ToolTip>
      ToolTip with default <Code>top</Code> placement
    </ToolTip>
  ))

  .add('Top Start ToolTip', () => (
    <ToolTip modifier={'start'}>
      ToolTip with <Code>top</Code> placement and <Code>start</Code> modifier
    </ToolTip>
  ))

  .add('Top End ToolTip', () => (
    <ToolTip modifier={'end'}>
      ToolTip with <Code>top</Code> placement and <Code>end</Code> modifier
    </ToolTip>
  ))

  .add('Right ToolTip', () => (
    <ToolTip placement={'right'}>
      ToolTip with <Code>right</Code> placement
    </ToolTip>
  ))

  .add('Right Start ToolTip', () => (
    <ToolTip placement={'right'} modifier={'start'}>
      ToolTip with <Code>right</Code> placement and <Code>start</Code> modifier
    </ToolTip>
  ))

  .add('Right End ToolTip', () => (
    <ToolTip placement={'right'} modifier={'end'}>
      ToolTip with <Code>right</Code> placement and <Code>end</Code> modifier
    </ToolTip>
  ))

  .add('Bottom ToolTip', () => (
    <ToolTip placement={'bottom'}>
      ToolTip with <Code>bottom</Code> placement
    </ToolTip>
  ))

  .add('Bottom Start ToolTip', () => (
    <ToolTip placement={'bottom'} modifier={'start'}>
      ToolTip with <Code>bottom</Code> placement and <Code>start</Code> modifier
    </ToolTip>
  ))

  .add('Bottom End ToolTip', () => (
    <ToolTip placement={'bottom'} modifier={'end'}>
      ToolTip with <Code>bottom</Code> placement and <Code>end</Code> modifier
    </ToolTip>
  ))

  .add('Left ToolTip', () => (
    <ToolTip placement={'left'}>
      ToolTip with <Code>left</Code> placement
    </ToolTip>
  ))

  .add('Left Start ToolTip', () => (
    <ToolTip placement={'left'} modifier={'start'}>
      ToolTip with <Code>left</Code> placement and <Code>start</Code> modifier
    </ToolTip>
  ))

  .add('Left End ToolTip', () => (
    <ToolTip placement={'left'} modifier={'end'}>
      ToolTip with <Code>left</Code> placement and <Code>end</Code> modifier
    </ToolTip>
  ));
