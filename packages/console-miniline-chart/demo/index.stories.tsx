import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './Basic';
import Area from './Area';
import AreaSmooth from './AreaSmooth';
import AreaStack from './AreaStack';
import Color from './Color';

storiesOf('ConsoleMinilineChart', module)
  .add('基本用法', () => <Basic />)
  .add('面积图', () => <Area />)
  .add('光滑面积图', () => <AreaSmooth />)
  .add('面积堆栈图', () => <AreaStack />)
  .add('自定义颜色', () => <Color />);
