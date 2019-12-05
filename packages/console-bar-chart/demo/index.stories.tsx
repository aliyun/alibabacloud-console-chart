import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './Basic';
import Horizontal from './Horizontal';
import Stack from './Stack';
import Color from './Color';
import Facet from './Facet';
import DodgeStack from './DodgeStack';

storiesOf('ConsoleBarChart', module)
  .add('基本用法', () => <Basic />)
  .add('水平柱状图', () => <Horizontal />)
  .add('堆叠柱状图', () => <Stack />)
  .add('镜面柱状图', () => <Facet />)
  .add('分组柱状图', () => <DodgeStack />)
  .add('自定义数据列颜色', () => <Color />);
