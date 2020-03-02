import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './Basic';
import Area from './Area';
import Multi from './Multi';
import Axis from './Axis';

storiesOf('ConsoleRadarChart', module)
  .add('基本用法', () => <Basic />)
  .add('面积图', () => <Area />)
  .add('多组数据', () => <Multi />)
  .add('自定义坐标轴', () => <Axis />);
