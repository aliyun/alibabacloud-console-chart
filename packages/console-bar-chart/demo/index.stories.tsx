import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './basic';
import Horizontal from './horizontal';
import Stack from './stack';
import Color from './color';
import Facet from './facet';
import DodgeStack from './dodgeStack';

storiesOf('ConsoleBarChart', module)
  .add('基本用法', () => <Basic />)
  .add('水平柱状图', () => <Horizontal />)
  .add('堆叠柱状图', () => <Stack />)
  .add('镜面柱状图', () => <Facet />)
  .add('分组柱状图', () => <DodgeStack />)
  .add('自定义数据列颜色', () => <Color />);
