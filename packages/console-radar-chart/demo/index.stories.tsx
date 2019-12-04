import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './basic';
import Area from './area';
import Multi from './multi';
import Axis from './axis';

storiesOf('ConsoleRadarChart', module)
  .add('基本用法', () => <Basic />)
  .add('面积图', () => <Area />)
  .add('多组数据', () => <Multi />)
  .add('自定义坐标轴', () => <Axis />);
