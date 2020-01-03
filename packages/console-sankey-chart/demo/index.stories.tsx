import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './Basic';
import MultiCol from './MultiCol';
import LinkStyle from './LinkStyle';
import Vertical from './Vertical';
import NodeAlign from './NodeAlign';

storiesOf('ConsoleSankeyChart', module)
  .add('基本桑基图', () => <Basic />)
  .add('多列情况', () => <MultiCol />)
  .add('配置边的样式', () => <LinkStyle />)
  .add('垂直布局', () => <Vertical />)
  .add('节点排列方式', () => <NodeAlign />)
